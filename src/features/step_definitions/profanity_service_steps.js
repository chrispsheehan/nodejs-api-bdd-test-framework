const { Given} = require("@cucumber/cucumber");
const expect = require('chai').expect;

Given('The profanity removing API is available', function () {

    this.purgomalumService.isAvailable(result => {
        expect(result).to.be.true
    });

});