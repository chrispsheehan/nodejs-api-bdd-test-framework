const { setWorldConstructor, World } = require("@cucumber/cucumber");
const PurgomalumService = require('../purgomalum.service/purgomalumService.js');

var config = require("../../config/config.js");

class CustomWorld extends World {

  constructor(options) {
    super(options);
    this.purgomalumService = new PurgomalumService({baseUrl: config.baseurl, endpoint: config.endpoint});
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
      return config.testprocessparam + '=' + this.messageText + this.replaceParam;
    }
    else {
      return config.testprocessparam + '=' + this.messageText;
    }
  }

  async getResponse() {
    var queryUrl = this.getParams();
    return this.purgomalumService.getResponse(queryUrl);
  }
}

setWorldConstructor(CustomWorld);