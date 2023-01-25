import { Given } from "@cucumber/cucumber";
import { expect } from 'chai';

Given('The profanity removing API is available', async function () {

    expect(await this.purgomalumService.isAvailable()).to.be.true
});