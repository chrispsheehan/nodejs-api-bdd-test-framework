import request from "supertest";

export default class ApiBase {
  
  baseUrl: string;
  api: string;
  serviceName: string;
  requestType: string;


  constructor(options: any) {

      this.baseUrl = options.baseurl;
      this.api = `${this.baseUrl}/${options.endpoint}/`;
      this.serviceName = "";
      this.requestType = "";
  }


  setService(serviceName: string, requestType: string) {
      
      this.serviceName = serviceName + '?';
      this.requestType = requestType;
  }    


  isServiceAvailable() {
      
    console.log(`\r\nChecking ${this.baseUrl} is available`);

    return request(this.baseUrl)
      .get("/")
      .expect(200)
  }

  
  getResponse(paramsArray: object) {
    
    console.log(`\r\nEndpoint: ${this.api}${this.serviceName}`);
    console.log(`Params: ${JSON.stringify(paramsArray)}`);

    return request(this.api)
      .get(this.serviceName)
      .query(paramsArray)
      .set('Accept', this.requestType)
      .expect(200)
  }      
}