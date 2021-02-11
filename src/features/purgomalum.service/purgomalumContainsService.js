const PurgomalumBase = require('./purgomalumService.js');

module.exports = class PurgomalumContainsService extends PurgomalumBase {
    
  constructor(options) {
    super(options);
   
    this.containsProfanityService = options.containsprofanityservice;    
  }

  setContainsProfanityService() {
    this.setService(this.containsProfanityService, 'text/plain');
  }      
      
  async process(messageText) {    
    return (await this.getResponse(this.getTextProcessParam(messageText))).text;
  }         
}