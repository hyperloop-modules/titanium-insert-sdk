// TODO: Move to imports once Hyperloop 3.1.0 is released
const NSURL = require('Foundation/NSURL');
const InsertManager = require('InsertFramework/InsertManager');

/*
 * A class used to initialize the Insert SDK and handle the URLs managed through Insert.
 *
 */
export default class TiInsert {
  
  static initialize(params = {}) {
    if (!params.apiKey) {
      throw 'Missing API-key!';
    }

    InsertManager.sharedManager().initSDKCompanyNameInitParams(params.apiKey, params.companyName, params.initParams);

    Ti.App.iOS.addEventListener('handleurl', event => {
      const launchURL = e.launchOptions.url;

      if (!launchURL || launchURL.indexOf('insert') !== 0) {
        return
      }

      InsertManager.sharedManager().initWithUrl(NSURL.URLWithString(launchURL));
    });    
  }
}
