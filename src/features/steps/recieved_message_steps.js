const { When } = require("@cucumber/cucumber");

When('I receive an incomming text of {string}', function(message) {
  this.messageText = message;
});