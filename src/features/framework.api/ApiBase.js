request = require('supertest');

module.exports = class ApiBase {
    
    constructor(args) {

        this.baseUrl = args.baseUrl;
        this.api = this.baseUrl + '/' + args.endpoint + '/';
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
      
      async getResponse(queryUrl) {
        
        console.log('\r\nGetting response from api' + this.api + this.serviceName + queryUrl);
        
        return await request(this.api)
          .get(this.serviceName + queryUrl)
          .set('Accept', this.requestType)
          .expect(200)
          .then(response => {
            return response;
            }) 
      }      
}