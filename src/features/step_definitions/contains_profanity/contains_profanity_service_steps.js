const { Given } = require("@cucumber/cucumber");

Given('I am using the contains profanity service', async function() {
    this.setService("containsprofanity");
});

Given('I check the content for profanitys', async function() {
    this.request
        .get("text=" + this.messageText)
        .expect(200)
        .catch(err => 
            console.log("Could not contact service " + err));
});