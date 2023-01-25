import { When } from "@cucumber/cucumber";

When('I receive an incomming text of {string}', function(message: string) {
  this.messageText = message;
});