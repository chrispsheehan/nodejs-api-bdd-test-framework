const { Given } = require("@cucumber/cucumber");

Given('I am using the contains profanity service', function() {
    this.purgomalumContainsService.setContainsProfanityService();
});

Given('I check the content for profanitys', async function() {
    this.result = await this.purgomalumContainsService.process(this.messageText);
});