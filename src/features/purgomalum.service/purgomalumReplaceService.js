const PurgomalumBase = require('./purgomalumService.js');

module.exports = class PurgomalumReplaceService extends PurgomalumBase {
    
  constructor(options) {
    super(options);

    this.defaultDataType = options.defaultDataType;
    this.replaceCharacterParam = options.replacecharacterparam;
    this.replaceStringParam = options.replacestringparam;
  }

  setDefaultService() {
    this.setService(this.defaultDataType, 'application/' + this.defaultDataType);
  }

  setReplaceCharacterService(replacementCharacter) {
    this.setDefaultService();
    this.replaceParams = '&' + this.replaceCharacterParam + '=' + replacementCharacter;    
  }

  setReplaceStringService(replacementString) {
    this.setDefaultService();
    this.replaceParams = '&' + this.replaceStringParam + '=' + replacementString;  
  }
  
  async getResult(messageText) {
    
    let testParamString = this.getTextProcessParam(messageText);

    if(this.replaceParams) {
      return (await this.getResponse(testParamString + this.replaceParams)).body.result;
    }else{
      return (await this.getResponse(testParamString)).body.result;
    }
  }     
}