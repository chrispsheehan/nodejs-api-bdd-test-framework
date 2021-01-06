const { Given } = require("@cucumber/cucumber");

const superTest = require('supertest');
const expect = require('chai').expect;

const url = 'https://www.purgomalum.com';
const purgomalum = superTest(url);


Given('The profanity removing API is available', async function () {
    let response = await purgomalum
    .get('/')
    .then(response => {
        return response;
    });
    expect(response.status, 'Status Successful').to.equal(200);
});