request = require('supertest');

module.exports = class ApiBase {
    
    constructor(options) {

        this.baseUrl = options.baseurl;
        this.api = this.baseUrl + '/' + options.endpoint + '/';
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
      
      async getResponse(paramsArray) {
        
        console.log('\r\nGetting response from api' + this.api + this.serviceName);
        console.log('Params ' + JSON.stringify(paramsArray));

        return await request(this.api)
          .get(this.serviceName)
          .query(paramsArray)
          .set('Accept', this.requestType)
          .expect(200)
          .then(response => {
            return response;
            }) 
      }      
}