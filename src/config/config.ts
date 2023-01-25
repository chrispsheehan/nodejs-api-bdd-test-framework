import settings from './settings.json';

export default class Config {

    baseurl = process.env.BASEURL || settings.baseurl;
    endpoint = settings.endpoint;
    api = this.baseurl + '/' + this.endpoint;
    defaultDataType = settings.defaultDataType;
    containsprofanityservice = settings.containsprofanityservice;
    replacecharacterparam = settings.replacecharacterparam;
    replacestringparam = settings.replacestringparam;
    textprocessparamname = settings.textprocessparamname;
}