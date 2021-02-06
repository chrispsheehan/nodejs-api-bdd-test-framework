const ApiBase = require('./apiBase');

request = require('supertest');

module.exports = class PurgomalumService extends ApiBase {
    
    constructor(options) {
        super(options);
      }
}