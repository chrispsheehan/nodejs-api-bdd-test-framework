const { setWorldConstructor, World } = require("@cucumber/cucumber");

class CustomWorld extends World {
  messageText = null;
  apiUri = "https://www.purgomalum.com"

  constructor(options) {
    super(options)
  }
  
  setMessage(messageText) {
    this.message = messageText
  }
}

setWorldConstructor(CustomWorld);