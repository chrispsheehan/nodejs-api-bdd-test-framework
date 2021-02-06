const { setWorldConstructor, World } = require("@cucumber/cucumber");
request = require('supertest');
var config = require("../../config/config.js");

class CustomWorld extends World {
  
  constructor(options) {
    super(options)
  }

  setService(serviceName, requestType) {
    this.serviceName = serviceName + '?';
    this.requestType = requestType;
  }

  setDefaultService() {
    this.setService(config.defaultDataType, 'application/' + config.defaultDataType);
  }

  setContainsProfanityService() {
    this.setService(config.containsprofanityservice, 'text/plain');
  }

  setReplacementCharacter(replacementCharacter) {
    this.replaceParam = '&' + config.replacecharacterparam + '=' + replacementCharacter;
  }

  setReplaceCharacterService(replacementCharacter) {
    this.setDefaultService();
    this.setReplacementCharacter(replacementCharacter);    
  }

  setReplacementString(replacementString) {
    this.replaceParam = '&' + config.replacestringparam + '=' + replacementString; 
  }

  setReplaceStringService(replacementString) {
    this.setDefaultService();
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
    console.log('\r\nRunning ' + config.api + '/' + this.serviceName + this.getParams());
    return await request(config.api)
      .get('/' + this.serviceName + this.getParams())
      .set('Accept', this.requestType)
      .expect(200)
      .then(response => {
        return response;
        }) 
  }

  async isUrlAvailable() {
    return await request(config.baseurl)
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