module.exports = {
    '@tags': ['broadcast','mars','app','smoke'],
    'MARS Nav Menu -  Broadcast Notification':function(browser) {
        var nav = browser.launchUrl + browser.globals.appUrl,
            user = browser.globals.appUN,
            pass = browser.globals.appPW;
        browser
        //login
            .useXpath()
            .url(nav)
            .waitForElementVisible('//body',5000,false)
            .setValue('//*[@id="Email"]',user)
            .setValue('//*[@id="Password"]',pass)
            .click('//button[@type=\'submit\']')
            .waitForElementVisible('//body',5000,false)
            .verify.containsText('//*[@id="dvMsg"]','Welcome back, Tcg User')

        //main test
            .useXpath()
            .click('//a[@href=\'' + nav + '/PA/BroadcastNotification.aspx?for=bro\']')
            .useCss()
            .waitForElementVisible('body',5000,false)
            .verify.title('MARS - Broadcast')
            .end();
    }
};

