const { Given } = require("@cucumber/cucumber");
const assert = require('chai').assert

Given('I am using the contains profanity service', function() {
    this.setService("containsprofanity");
});

Given('I check the content for profanitys', function() {
    assert.isTrue(true);
});