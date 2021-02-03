const { setWorldConstructor, World } = require("@cucumber/cucumber");
request = require('supertest');
let settings = require("./../../settings.json");

const apiUri = settings.baseurl;

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

  setDefaultEndpoint() {
    this.setEndpoint('json', 'application/json');
  }

  setReplacementCharacter(replacementCharacter) {
    this.replaceParam = '&fill_char=' + replacementCharacter;
  }

  setReplaceCharacterEndpoint(replacementCharacter) {
    this.setDefaultEndpoint();
    this.setReplacementCharacter(replacementCharacter);    
  }

  setReplacementString(replacementString) {
    this.replaceParam = '&fill_text=' + replacementString; 
  }

  setReplaceStringEndpoint(replacementString) {
    this.setDefaultEndpoint();
    this.setReplacementString(replacementString);    
  }

  getParams(){
    if(this.replaceParam) {
      return 'text=' + this.messageText + this.replaceParam;
    }
    else {
      return 'text=' + this.messageText;
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

  async isUrlAvailable() {
    return await request(this.apiUri)
        .get("/")
        .expect(200)
        .catch(err => {
            console.log("Could not contact service " + err);
            return false;})
        .then(() => {
            return true;});
  }
}

setWorldConstructor(CustomWorld);