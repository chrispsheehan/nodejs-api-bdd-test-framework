import { Given, When } from "@cucumber/cucumber";

Given('I am using the profanity replacement service', function() {
    this.purgomalumReplaceService.setDefaultService();
});

Given('I am using the profanity character replacement service with {string}', function(replacementCharacter: string) {
    this.purgomalumReplaceService.setReplaceCharacterService(replacementCharacter);
});

Given('I am using the profanity string replacement service with {string}', function (replacementString: string) {
    this.purgomalumReplaceService.setReplaceStringService(replacementString);
});

When('I replace profanitys in the content', async function() {       

    this.result = await this.purgomalumReplaceService.process(this.messageText);
});