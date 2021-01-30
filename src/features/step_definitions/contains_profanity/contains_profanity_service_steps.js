const { Given } = require("@cucumber/cucumber");
const { assert } = require("chai");

Given('I am using the contains profanity service', function() {
    this.setEndpoint('containsprofanity', 'text/plain');
});

Given('I check the content for profanitys', async function() {
    // this.executeRequest();
});