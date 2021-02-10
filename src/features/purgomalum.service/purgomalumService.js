const ApiBase = require('../framework.api/ApiBase');

request = require('supertest');

module.exports = class PurgomalumService extends ApiBase {
    
    constructor(args) {
        super(args);      
        this.textProcessParam = args.textprocessparam;
      }

    setTextProcessParam(messageText){
      return `${this.textProcessParam}=${messageText}`;
    }  
}