const { When } = require("@cucumber/cucumber");
const assert = require('chai').assert

When('I receive an incomming text of {string}', function(message) {
  this.message = message;
});