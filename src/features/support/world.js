const { setWorldConstructor, World } = require("@cucumber/cucumber");

class CustomWorld extends World {
  variable = 0;
  messageText = null;

  constructor(options) {
    super(options)
  }
  
  setMessage(messageText) {
    this.message = messageText
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(CustomWorld);