import { Then } from "@cucumber/cucumber";
const expect = require('chai').expect

Then('profanitys are found', function() {
  expect(this.result).to.equal('true');
});

Then('no profanitys are found', function() {
  expect(this.result).to.equal('false');
});