const { setWorldConstructor, World } = require("@cucumber/cucumber");
const PurgomalumService = require('../purgomalum.service/purgomalumService.js');

var config = require("../../config/config.js");

class CustomWorld extends World {

  purgomalumService = new PurgomalumService({baseUrl: config.baseurl, endpoint: config.endpoint, testprocessparam: config.testprocessparam});

  constructor(options) {
    super(options);
  }

  setDefaultService() {
    this.purgomalumService.setService(config.defaultDataType, 'application/' + config.defaultDataType);
  }

  setContainsProfanityService() {
    this.purgomalumService.setService(config.containsprofanityservice, 'text/plain');
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
      return this.purgomalumService.setTextProcessParam(this.messageText) + this.replaceParam;
    }
    else {
      return this.purgomalumService.setTextProcessParam(this.messageText);
    }
  }

  async getResponse() {
    var queryUrl = this.getParams();
    return this.purgomalumService.getResponse(queryUrl);
  }
}

setWorldConstructor(CustomWorld);