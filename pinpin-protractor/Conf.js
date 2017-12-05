exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['login.js'],
    allScriptsTimeout: 120000,
    getPageTimeout: 120000,
    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000
    },
    onPrepare: function () {
        browser.driver.manage().window().maximize();
    }};