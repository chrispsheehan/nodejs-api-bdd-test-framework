const PurgomalumService = require('./purgomalumService.js');

module.exports = class PurgomalumReplaceService extends PurgomalumService {
    
  constructor(options) {
    super(options);

    this.defaultDataType = options.defaultDataType;
    this.replaceCharacterParam = options.replacecharacterparam;
    this.replaceStringParam = options.replacestringparam;
  }

  setDefaultService() {
    this.setService(this.defaultDataType, `application/${this.defaultDataType}`);

    this.replaceParams = {};
  }

  setReplaceCharacterService(replacementCharacter) {
    this.setDefaultService();

    this.replaceParams = {
      [this.replaceCharacterParam] : replacementCharacter
    }        
  }

  setReplaceStringService(replacementString) {
    this.setDefaultService();

    this.replaceParams = {
        [this.replaceStringParam] : replacementString
      }
  }
  
  process (messageText) {
    
    this.getProcessedTextResponse(messageText, this.replaceParams)
    .then(response => {
      console.log('repl' + JSON.stringify(response.body.result))
      return response.body.result;
    })
    .catch(err => {
      return err
    })
  }
}