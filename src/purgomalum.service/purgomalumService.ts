import ApiBase from '../framework.api/api.base';

export default class PurgomalumService extends ApiBase {
  
  textProcessParamName: string;

  constructor(options: any) {
        
    super(options);
        
    this.textProcessParamName = options.textprocessparamname;
  }


  getProcessedTextResponse(messageText: string, additionalParams: object) {      
      
    var params = {
      [this.textProcessParamName] : messageText
    };
      
    return this.getResponse({...params, ...additionalParams });
  }


  isAvailable() {
  
    return new Promise((resolve, reject) => {
      this.isServiceAvailable()
      .then(() => {
        return resolve(true);
      })
      .catch(() => {
        return reject(false);
      })
    });
  }
}