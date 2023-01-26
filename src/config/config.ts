import settings from './settings.json';

export default class Config {
    
    baseurl: string;
    endpoint: string;
    api: string;
    defaultDataType: string;
    containsprofanityservice: string;
    replacecharacterparam: string;
    replacestringparam: string;
    textprocessparamname: string;

    constructor () {
        this.baseurl = process.env.BASEURL || settings.baseurl;
        this.endpoint = settings.endpoint;
        this.api = this.baseurl + '/' + this.endpoint;
        this.defaultDataType = settings.defaultDataType;
        this.containsprofanityservice = settings.containsprofanityservice;
        this.replacecharacterparam = settings.replacecharacterparam;
        this.replacestringparam = settings.replacestringparam;
        this.textprocessparamname = settings.textprocessparamname;
    }
}