import { setWorldConstructor, World } from "@cucumber/cucumber";

import PurgomalumService from '../../purgomalum.service/purgomalumService';
import PurgomalumContainsService from '../../purgomalum.service/purgomalumContainsService';
import PurgomalumReplaceService from '../../purgomalum.service/purgomalumReplaceService';

import config from '../../config/config.js';

class Purgomalum extends World {

  purgomalumService = new PurgomalumService(config);
  purgomalumContainsService = new PurgomalumContainsService(config);
  purgomalumReplaceService = new PurgomalumReplaceService(config);

  messageText: string;

  constructor(options: any) {
    super(options);

    this.messageText = "";
  }
}

setWorldConstructor(Purgomalum);