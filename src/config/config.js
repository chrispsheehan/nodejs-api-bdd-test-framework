let settings = require("./settings.json");

var config = {};

config.baseurl = process.env.BASEURL || settings.baseurl;
config.endpoint = settings.endpoint;
config.api = config.baseurl + '/' + config.endpoint;

config.defaultDataType = settings.defaultDataType;
config.containsprofanityservice = settings.containsprofanityservice;
config.replacecharacterparam = settings.replacecharacterparam;
config.replacestringparam = settings.replacestringparam;
config.testprocessparam = settings.testprocessparam;

module.exports = config;