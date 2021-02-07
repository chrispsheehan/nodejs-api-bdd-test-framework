request = require('supertest');

module.exports = class ApiBase {
    
    constructor(args) {

        this.baseUrl = args.baseUrl;
        this.endpoint = args.endpoint;
        this.api = this.baseUrl + '/' + this.endpoint;
    }

    setService(serviceName, requestType) {
        this.serviceName = serviceName + '?';
        this.requestType = requestType;
      }    

    async isAvailable() {
        
        console.log('\r\nChecking ' + this.baseUrl + ' is available');

        return await request(this.baseUrl)
            .get("/")
            .expect(200)
            .catch(err => {
                console.log("Could not contact service " + err);
                return false;})
            .then(() => {
                return true;});
      }
      
      async getResponse(requestType, queryUrl) {
        
        console.log('\r\nGetting response from ' + this.api + queryUrl);
        
        return await request(this.api)
          .get('/' + queryUrl)
          .set('Accept', requestType)
          .expect(200)
          .then(response => {
            return response;
            }) 
      }      
}