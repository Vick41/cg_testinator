module.exports = {
    '@tags': ['events','mars','app','smoke'],
    'MARS Nav Menu - Events':function(browser) {
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
        //select All Workspace button and verify table loads on next page
            .click('//a[@href=\'' + nav + '/Events.aspx\']')
            .waitForElementVisible('//*[@id="MainContent_pnlBody"]',5000,false)
            .verify.visible('//*[@id="MainContent_pnlBody"]','Table is present')
            .verify.title('MARS - Events')
            .end();
    }
};

