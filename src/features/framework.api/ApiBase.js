request = require('supertest');

module.exports = class ApiBase {
    
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async isAvailable() {
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
        console.log('\r\nRunning ' + queryUrl);
        return await request(config.api)
          .get('/' + queryUrl)
          .set('Accept', requestType)
          .expect(200)
          .then(response => {
            return response;
            }) 
      }      
}