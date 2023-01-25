import ApiBase from '../framework.api/ApiBase';

export default class PurgomalumService extends ApiBase {

  constructor(options: any) {
        
    super(options);
        
    this.textProcessParamName = options.textprocessparamname;
  }


  getProcessedTextResponse(messageText, additionalParams) {      
      
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