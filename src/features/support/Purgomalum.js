const { setWorldConstructor, World } = require("@cucumber/cucumber");
const PurgomalumContainsService = require('../purgomalum.service/purgomalumContainsService.js');

var config = require("../../config/config.js");

class Purgomalum extends World {

  purgomalumService = new PurgomalumContainsService(config);

  constructor(options) {
    super(options);
  }

  setContainsProfanityService() {
    this.purgomalumService.setService(config.containsprofanityservice, 'text/plain');
  }

  setReplacementCharacter(replacementCharacter) {
    this.replaceParam = '&' + config.replacecharacterparam + '=' + replacementCharacter;
  }

  setReplaceCharacterService(replacementCharacter) {
    this.purgomalumService.setDefaultService();
    this.setReplacementCharacter(replacementCharacter);    
  }

  setReplacementString(replacementString) {
    this.replaceParam = '&' + config.replacestringparam + '=' + replacementString; 
  }

  setReplaceStringService(replacementString) {
    this.purgomalumService.setDefaultService();
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