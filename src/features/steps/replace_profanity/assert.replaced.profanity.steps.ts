import { Then } from "@cucumber/cucumber";
import { expect } from 'chai';

Then('no asterisks are added', function() {
    //expect(this.result).to.not.contain('*');
});

Then('replaced with the corresponding amount of asterisks', function() {
    //expect(this.result).to.contain('*');
});

Then('replaced profanity with the corresponding amount of {string}', function(replacementCharacter: string) {
    //expect(this.result).to.contain(replacementCharacter);
});

Then('the string of {string} is added', function(replacementString: string) {
    //expect(this.result).to.contain(replacementString);
});

Then('the {string} remains unchanged', function(orginalText: string) {
    //expect(this.result).to.equal(orginalText);
});