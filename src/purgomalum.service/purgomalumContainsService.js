const PurgomalumService = require('./purgomalumService.js');

module.exports = class PurgomalumContainsService extends PurgomalumService {
    
  constructor(options) {
    super(options);
   
    this.containsProfanityService = options.containsprofanityservice;    
  }

  setContainsProfanityService() {
    this.setService(this.containsProfanityService, 'text/plain');
  }      
      
  process(messageText) {

    return this.getProcessedTextResponse(messageText, {})
  }         
}