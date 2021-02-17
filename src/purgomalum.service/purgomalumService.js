const ApiBase = require('../framework.api/ApiBase');

module.exports = class PurgomalumService extends ApiBase {

    constructor(options) {
        super(options);
        
        this.textProcessParamName = options.textprocessparamname;
      }


    getProcessedTextResponse(messageText, additionalParams) {      
      var params = {
        [this.textProcessParamName] : messageText
      };

      console.log('messageText' + messageText);

      return this.getResponse({...params, ...additionalParams });
    }
}