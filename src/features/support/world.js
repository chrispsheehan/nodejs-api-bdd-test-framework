const { setWorldConstructor, World } = require("@cucumber/cucumber");

class CustomWorld extends World {
  messageText = null;

  constructor(options) {
    super(options)
  }
  
  setMessage(messageText) {
    this.message = messageText
  }
}

setWorldConstructor(CustomWorld);