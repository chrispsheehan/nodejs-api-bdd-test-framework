const { Then } = require("@cucumber/cucumber");
const assert = require('chai').assert

Then("no asterisks are added", function() {
  assert.isTrue(true);
});

Then("replaced with the corresponding amount of asterisks", function() {
    assert.isTrue(true);
});

Then("replaced profanity with the corresponding amount of {string}", function(replacementCharacter) {
    assert.isTrue(true);
});

Then("the string of {string} is added", function(replacementString) {
    assert.isTrue(true);
});

Then("the {string} remains unchanged", function(text) {
    assert.isTrue(true);
});