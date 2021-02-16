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

    isAvailable(callback) {
        
      console.log(`\r\nChecking ${this.baseUrl} is available`);

        request(this.baseUrl)
          .get("/")
          .expect(200)
          .then(() => {
            callback(true);
          })            
          .catch(err => {
            console.log(`Could not contact service ${err}`);
            callback(false);
          });
      }
      
      getResponse(paramsArray, callback) {
        console.log(`\r\nEndpoint: ${this.api}${this.serviceName}`);
        console.log(`Params: ${JSON.stringify(paramsArray)}`);

        request(this.api)
          .get(this.serviceName)
          .query(paramsArray)
          .set('Accept', this.requestType)
          .expect(200)
          .then(response => {
            callback(response);
          });
      }      
}