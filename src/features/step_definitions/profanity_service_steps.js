const { Given } = require("@cucumber/cucumber");
const request = require('supertest')

Given('The profanity removing API is available', async function () {
    request(this.apiUri)
        .get("/")
        .expect(200)
        .catch(err => 
            console.log("custom error text" + err));
});