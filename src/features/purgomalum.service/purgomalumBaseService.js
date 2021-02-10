const ApiBase = require('../framework.api/ApiBase');

module.exports = class PurgomalumBaseService extends ApiBase {
    
    constructor(args) {
        super(args);      
        this.textProcessParam = args.textprocessparam;
      }

    setTextProcessParam(messageText){
      return `${this.textProcessParam}=${messageText}`;
    }  
}