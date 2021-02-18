request = require('supertest');

module.exports = class ApiBase {
    
    constructor(options) {

        this.baseUrl = options.baseurl;
        this.api = `${this.baseUrl}/${options.endpoint}/`;
    }

    setService(serviceName, requestType) {
        
        this.serviceName = serviceName + '?';
        this.requestType = requestType;
    }    

    isServiceAvailable() {
        
      console.log(`\r\nChecking ${this.baseUrl} is available`);

      return request(this.baseUrl)
        .get("/")
        .expect(200)
      }

      
    getResponse(paramsArray) {
      
      console.log(`\r\nEndpoint: ${this.api}${this.serviceName}`);
      console.log(`Params: ${JSON.stringify(paramsArray)}`);

      return request(this.api)
        .get(this.serviceName)
        .query(paramsArray)
        .set('Accept', this.requestType)
        .expect(200)
      }      
}