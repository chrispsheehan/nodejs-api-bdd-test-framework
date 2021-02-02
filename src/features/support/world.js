const { setWorldConstructor, World } = require("@cucumber/cucumber");
request = require('supertest');
const apiUri = 'https://www.purgomalum.com';


class CustomWorld extends World {
  messageText = null;
  endpointName = null;
  requestType = null;
  apiUri = null;
  textParam = null;
  replaceParam = null;
  result = null;


  constructor(options) {
    super(options)
    this.apiUri = apiUri;
    this.apiService = apiUri + "/service";
  }

  setEndpoint(endpointName, requestType) {
    this.endpointName = endpointName + '?';
    this.requestType = requestType;
  }

  setMessageContent(messageText) {
    this.textParam = 'text=' + messageText;
  }

  setReplacementCharacter(replacementCharacter) {
    this.replaceParam = '&fill_char=' + replacementCharacter;
  }

  setReplacementString(replacementString) {
    this.replaceParam = '&fill_text=' + replacementString; 
  }

  getParams(){
    if(this.replaceParam) {
      return this.textParam + this.replaceParam;
    }
    else {
      return this.textParam;
    }
  }

  async getResponse() {
    console.log('\r\nRunning ' + this.apiService + '/' + this.endpointName + this.getParams());
    return await request(this.apiService)
      .get('/' + this.endpointName + this.getParams())
      .set('Accept', this.requestType)
      .expect(200)
      .then(response => {
        return response;
        }) 
  }
}

setWorldConstructor(CustomWorld);