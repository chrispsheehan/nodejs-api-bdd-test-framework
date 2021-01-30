const { setWorldConstructor, World } = require("@cucumber/cucumber");
request = require('supertest');
const apiUri = "https://www.purgomalum.com";


class CustomWorld extends World {
  messageText = null;
  endpointName = null;
  requestType = null;
  apiUri = null;
  textParam = null;
  response = null;

  constructor(options) {
    super(options)
    this.apiUri = apiUri;
    this.apiService = apiUri + "/service";
  }

  setEndpoint(endpointName, requestType) {
    this.endpointName = endpointName + '?';
    this.requestType = requestType;
  }

  setMessageContent(messageText) {
    this.textParam = 'text=' + messageText;
  }
}

setWorldConstructor(CustomWorld);