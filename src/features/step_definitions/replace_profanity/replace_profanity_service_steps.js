const { Given, When } = require("@cucumber/cucumber");
const assert = require('chai').assert

When("I replace profanitys in the content", function() {
  assert.isTrue(true);
});

Given("I am using the profanity replacement service", function() {
    assert.isTrue(true);
});

Given("I am using the profanity character replacement service with {string}", function(replacementCharacter) {
    assert.isTrue(true);
});

Given("I am using the profanity replacement service {string}", function(replacementString) {
    assert.isTrue(true);
});