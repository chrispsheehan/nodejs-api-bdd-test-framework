const ApiBase = require('../framework.api/ApiBase');

module.exports = class PurgomalumBase extends ApiBase {

    constructor(options) {
        super(options);
        
        this.textProcessParamName = options.textprocessparamname;
      }

    getTextProcessParam(messageText){
      return `${this.textProcessParamName}=${messageText}`;
    }
}