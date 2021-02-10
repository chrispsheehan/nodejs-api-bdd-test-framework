const ApiBase = require('../framework.api/ApiBase');

module.exports = class PurgomalumBase extends ApiBase {
    
    constructor(options) {
        super(options);      
        this.textProcessParam = options.textprocessparam;
      }

    setTextProcessParam(messageText){
      return `${this.textProcessParam}=${messageText}`;
    }  
}