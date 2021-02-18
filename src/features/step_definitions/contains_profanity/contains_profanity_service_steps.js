const { Given } = require("@cucumber/cucumber");

Given('I am using the contains profanity service', function() {
    this.purgomalumContainsService.setContainsProfanityService();
});

Given('I check the content for profanitys', function() {

    console.log('mess' + this.messageText);

    this.result = this.purgomalumContainsService.process(this.messageText, result => {
        
        console.log('result ' + result);
        return result;
    });
});