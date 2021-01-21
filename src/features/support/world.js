const { setWorldConstructor, World } = require("@cucumber/cucumber");
const request = require('supertest')

class CustomWorld extends World {
  messageText = null;
  request = request("https://www.purgomalum.com");

  constructor(options) {
    super(options)
  }
  
  setMessage(messageText) {
    this.message = messageText
  }
}

setWorldConstructor(CustomWorld);