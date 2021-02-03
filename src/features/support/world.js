const { setWorldConstructor, World } = require("@cucumber/cucumber");
request = require('supertest');
var config = require("./../../config.js");

const apiUri = config.baseurl;

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
    this.apiService = apiUri + '/' + config.endpoint;
  }

  setEndpoint(endpointName, requestType) {
    this.endpointName = endpointName + '?';
    this.requestType = requestType;
  }

  setDefaultEndpoint() {
    this.setEndpoint(config.defaultDataType, 'application/' + config.defaultDataType);
  }

  setReplacementCharacter(replacementCharacter) {
    this.replaceParam = '&' + config.replacecharacterparam + '=' + replacementCharacter;
  }

  setReplaceCharacterEndpoint(replacementCharacter) {
    this.setDefaultEndpoint();
    this.setReplacementCharacter(replacementCharacter);    
  }

  setReplacementString(replacementString) {
    this.replaceParam = '&' + config.replacestringparam + '=' + replacementString; 
  }

  setReplaceStringEndpoint(replacementString) {
    this.setDefaultEndpoint();
    this.setReplacementString(replacementString);    
  }

  getParams(){
    if(this.replaceParam) {
      return config.testprocessparam + '=' + this.messageText + this.replaceParam;
    }
    else {
      return config.testprocessparam + '=' + this.messageText;
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