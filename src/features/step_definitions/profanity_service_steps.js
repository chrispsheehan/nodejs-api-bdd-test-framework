const { Given} = require("@cucumber/cucumber");
const expect = require('chai').expect;

Given('The profanity removing API is available', async function () {
    expect(await this.isUrlAvailable()).to.be.true;
});