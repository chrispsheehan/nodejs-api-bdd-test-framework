const { setWorldConstructor, World } = require("@cucumber/cucumber");
const request = require('supertest');
const apiUri = "https://www.purgomalum.com";


class CustomWorld extends World {
  messageText = null;
  request = request(apiUri);

  constructor(options) {
    super(options)
  }

  setService(serviceName) {
    this.request = request(apiUri + "/service/" + serviceName + "?");
  }
}

setWorldConstructor(CustomWorld);