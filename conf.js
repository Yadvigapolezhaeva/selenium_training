// An example configuration file.
exports.config = {
  directConnect: false,
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'internet explorer',
      ignoreZoomSetting: true //Иногда мудрю с зумом
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
 //specs: ['google_search_test.js'],
    specs: ['litecart_login.js'],

    allScriptsTimeout: 5000000,
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
