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
}