const { setWorldConstructor, World } = require("@cucumber/cucumber");
request = require('supertest');
const apiUri = "https://www.purgomalum.com";
const apiService = apiUri + "/service";


class CustomWorld extends World {
  messageText = null;
  endpointName = null;
  requestType = null;
  apiUri = null;

  constructor(options) {
    super(options)
    this.apiUri = apiUri;
  }

  setEndpoint(endpointName, requestType) {
    this.endpointName = endpointName + '?';
    this.requestType = requestType;
  }

  executeRequest() {
    request(apiService)
      .get('/' + this.endpointName + 'text=ass')
      .set('Accept', this.requestType)
      .expect(200)
      .then(response => {
          // assert.equal(response.text, 'true');
          // // assert.equal(response.text, 'false');        
          console.log(response.text)
      })
  }
}

setWorldConstructor(CustomWorld);