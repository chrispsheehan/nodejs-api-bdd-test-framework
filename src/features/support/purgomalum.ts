import { setWorldConstructor, World } from "@cucumber/cucumber";

import PurgomalumService from '../../purgomalum.service/purgomalumService';
import PurgomalumContainsService from '../../purgomalum.service/purgomalumContainsService';
import PurgomalumReplaceService from '../../purgomalum.service/purgomalumReplaceService';

import Config from "../../config/config.js";

class Purgomalum extends World {

  messageText: string;
  purgomalumService: PurgomalumService;
  purgomalumContainsService: PurgomalumContainsService;
  purgomalumReplaceService: PurgomalumReplaceService;

  constructor(options: any) {
    super(options);

    let config: Config = new Config();

    this.messageText = "";
    this.purgomalumService = new PurgomalumService(config);
    this.purgomalumContainsService = new PurgomalumContainsService(config);
    this.purgomalumReplaceService = new PurgomalumReplaceService(config);
  }
}

setWorldConstructor(Purgomalum);