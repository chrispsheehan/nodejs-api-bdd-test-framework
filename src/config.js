let settings = require("./settings.json");

var config = {};

config.baseurl = process.env.BASEURL || settings.baseurl;

config.endpoint = "service";
config.defaultDataType = "json";
config.containsprofanityservice = "containsprofanity";
config.replacecharacterservice = "fill_char";
config.replacestringservice = "fill_text";
config.testprocessparam = "text";

module.exports = config;