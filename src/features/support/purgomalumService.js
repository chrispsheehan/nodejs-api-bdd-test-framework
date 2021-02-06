request = require('supertest');

module.exports = class PurgomalumService {
    
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