const PurgomalumBase = require('./purgomalumBase.js');

module.exports = class PurgomalumContainsService extends PurgomalumBase {
    
    constructor(options) {
        super(options);

        this.defaultDataType = options.defaultDataType;
      }

      setDefaultService() {
        this.setService(this.defaultDataType, 'application/' + this.defaultDataType);
      }      
}