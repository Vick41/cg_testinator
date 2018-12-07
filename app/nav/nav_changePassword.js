module.exports = {
    '@tags': ['changePW','mars','app','smoke'],
    'MARS Nav Menu - Change Password':function(browser) {
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
            .click('//a[@href=\'' + nav + '/Home/ChangePassword\']')
            .waitForElementVisible('//div[3]/div/div/div',5000,false)
            .verify.containsText('//div[3]/div/div/div','Change Password')
            .verify.containsText('//label/label','Current password')
            .verify.containsText('//div[2]/label/label','New password')
            .verify.containsText('//div[3]/label/label','Confirm new password')
            .end();
    }
};

