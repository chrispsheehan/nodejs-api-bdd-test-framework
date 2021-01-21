const { Given } = require("@cucumber/cucumber");

Given('The profanity removing API is available', async function () {
    this.request
        .get("/")
        .expect(200)
        .catch(err => 
            console.log("Could not contact service " + err));
});