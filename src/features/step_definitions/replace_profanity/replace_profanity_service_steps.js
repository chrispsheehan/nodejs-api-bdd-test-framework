const { Given, When } = require("@cucumber/cucumber");

Given('I am using the profanity replacement service', function() {
    this.setEndpoint('json', 'application/json');
});

When('I replace profanitys in the content', async function() {  
    await request(this.apiService)
      .get('/' + this.endpointName + this.textParam + this.replaceParam)
      .set('Accept', this.requestType)
      .expect(200)
      .then(response => {
        console.log(response.body.result);     
      })
});

Given('I am using the profanity character replacement service with {string}', function(replacementCharacter) {
    this.setEndpoint('json', 'application/json');
    this.setReplacementCharacter(replacementCharacter);
});

Given('I am using the profanity string replacement service with {string}', function (replacementString) {
    this.setEndpoint('json', 'application/json');
    this.setReplacementString(replacementString);
  });