const { Given, When } = require("@cucumber/cucumber");

Given('I am using the profanity replacement service', function() {
    this.setDefaultEndpoint();
});

When('I replace profanitys in the content', async function() {   
    this.result = (await this.getResponse()).body.result;
});

Given('I am using the profanity character replacement service with {string}', function(replacementCharacter) {
    this.setReplaceCharacterEndpoint(replacementCharacter);
});

Given('I am using the profanity string replacement service with {string}', function (replacementString) {
    this.setReplaceStringEndpoint(replacementString);
});