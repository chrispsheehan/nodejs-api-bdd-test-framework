import PurgomalumService from './purgomalumService';

export default class PurgomalumContainsService extends PurgomalumService {
  
  containsProfanityService: string;

  constructor(options: any) {
    
    super(options);
   
    this.containsProfanityService = options.containsprofanityservice;    
  }

  setContainsProfanityService() {

    this.setService(this.containsProfanityService, 'text/plain');
  }      
      
  process(messageText: string) {

    return new Promise((resolve, reject) => {
      this.getProcessedTextResponse(messageText, {})
      .then(response => {
        return resolve(response.text);
      })
      .catch(err => {
        return reject(err);
      });  
    })
  }      
}