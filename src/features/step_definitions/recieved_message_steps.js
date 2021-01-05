const { When } = require("@cucumber/cucumber");
const assert = require('chai').assert

When("I receive an incomming text of {string}", function(text) {
  assert.isTrue(true);
});