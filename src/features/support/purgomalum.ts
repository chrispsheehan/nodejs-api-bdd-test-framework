import { setWorldConstructor, World } from "@cucumber/cucumber";

import PurgomalumService from '../../purgomalum.service/purgomalumService';
import PurgomalumContainsService from '../../purgomalum.service/purgomalumContainsService.js';
import PurgomalumReplaceService from '../../purgomalum.service/purgomalumReplaceService.js';

var config = require("../../config/config.js");

class Purgomalum extends World {

  purgomalumService = new PurgomalumService(config);
  purgomalumContainsService = new PurgomalumContainsService(config);
  purgomalumReplaceService = new PurgomalumReplaceService(config);

  constructor(options: any) {
    super(options);
  }
}

setWorldConstructor(Purgomalum);