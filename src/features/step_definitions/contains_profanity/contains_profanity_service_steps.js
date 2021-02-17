const { Given } = require("@cucumber/cucumber");

Given('I am using the contains profanity service', function() {
    this.purgomalumContainsService.setContainsProfanityService();
});

Given('I check the content for profanitys', async function(next) {
    
    // let resultText;

    // //https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/step_definitions.md

    // //https://stackoverflow.com/questions/54326769/in-cucumber-callback-function-getting-timedout-though-callback-is-called-alrea

    // this.purgomalumContainsService.process(this.messageText, responseText => {
    //     resultText = responseText;
    // });

    this.result = this.purgomalumContainsService.process(this.messageText);

    next()
});