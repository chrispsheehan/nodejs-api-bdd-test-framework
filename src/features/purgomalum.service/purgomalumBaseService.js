const ApiBase = require('../framework.api/ApiBase');

module.exports = class PurgomalumBaseService extends ApiBase {
    
    constructor(options) {
        super(options);      
        this.textProcessParam = options.textprocessparam;
      }

    setTextProcessParam(messageText){
      return `${this.textProcessParam}=${messageText}`;
    }  
}