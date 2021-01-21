const { Given } = require("@cucumber/cucumber");
const expect = require('chai').expect;

Given('The profanity removing API is available', async function () {
    let response = await this.api
    .get('/')
    .then(response => {
        return response;
    });
    expect(response.status, 'Status Successful').to.equal(200);
});