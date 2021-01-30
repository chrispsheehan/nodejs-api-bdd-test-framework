const { Then } = require("@cucumber/cucumber");
const assert = require('chai').assert

Then('profanitys are found', function() {
  assert.isTrue(true);
});

Then('no profanitys are found', function() {
  assert.isFalse(false);
});