const PurgomalumService = require('./purgomalumService.js');

module.exports = class PurgomalumContainsService extends PurgomalumService {
    
  constructor(options) {
    super(options);
   
    this.containsProfanityService = options.containsprofanityservice;    
  }

  setContainsProfanityService() {
    this.setService(this.containsProfanityService, 'text/plain');
  }      
      
  process = function (messageText, callback) {

    this.getProcessedTextResponse(messageText, {})
    .then(response => {
      console.log('contains' + response.text);
      callback(response.text);
    })
    .catch(err => {
      callback(err);
    })
  }         
}