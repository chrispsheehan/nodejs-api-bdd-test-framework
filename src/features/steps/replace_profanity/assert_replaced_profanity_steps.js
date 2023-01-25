const { Then } = require("@cucumber/cucumber");
const expect = require('chai').expect;

Then('no asterisks are added', function() {
    expect(this.result).to.not.contain('*');
});

Then('replaced with the corresponding amount of asterisks', function() {
    expect(this.result).to.contain('*');
});

Then('replaced profanity with the corresponding amount of {string}', function(replacementCharacter) {
    expect(this.result).to.contain(replacementCharacter);
});

Then('the string of {string} is added', function(replacementString) {
    expect(this.result).to.contain(replacementString);
});

Then('the {string} remains unchanged', function(orginalText) {
    expect(this.result).to.equal(orginalText);
});