const { Given } = require("@cucumber/cucumber");
const { assert } = require("chai");

Given('I am using the contains profanity service', function() {
    this.setEndpoint('containsprofanity', 'text/plain');
});

Given('I check the content for profanitys', async function() {
    await request(this.apiService)
      .get('/' + this.endpointName + this.textParam)
      .set('Accept', this.requestType)
      .expect(200)
      .then(response => {
        console.log(response.text);     
      })
});