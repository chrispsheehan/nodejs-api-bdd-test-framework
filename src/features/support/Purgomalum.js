const { setWorldConstructor, World } = require("@cucumber/cucumber");
const PurgomalumBase = require('../purgomalum.service/purgomalumBase.js');

var config = require("../../config/config.js");

class Purgomalum extends World {

  purgomalumService = new PurgomalumBase(config);

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

setWorldConstructor(Purgomalum);