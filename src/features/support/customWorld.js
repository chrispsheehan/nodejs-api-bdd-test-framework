const { setWorldConstructor, World } = require("@cucumber/cucumber");

const PurgomalumService = require('../../purgomalum.service/purgomalumService.js');
const PurgomalumContainsService = require('../../purgomalum.service/purgomalumContainsService.js');
const PurgomalumReplaceService = require('../../purgomalum.service/purgomalumReplaceService.js');

var config = require("../../config/config.js");

class CustomWorld extends World {

  purgomalumService = new PurgomalumService(config);
  purgomalumContainsService = new PurgomalumContainsService(config);
  purgomalumReplaceService = new PurgomalumReplaceService(config);

  constructor(options) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);