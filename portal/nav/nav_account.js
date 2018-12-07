module.exports = {
    '@tags': ['mars','portal','account','smoke'],
    'MARS Portal Account Nav Test':function(browser) {
        var nav = browser.launchUrl + browser.globals.portalUrl,
            user = browser.globals.portalUN,
            pass = browser.globals.portalPW;
        browser
        //login
            .useXpath()
            .url(nav)
            .waitForElementVisible('//input[@id=\'MainContent_LoginUser_LoginButton\']',5000,false)
            .setValue('//input[@id=\'MainContent_LoginUser_UserName\']',user)
            .setValue('//input[@id=\'MainContent_LoginUser_Password\']',pass)
            .click('//input[@id=\'MainContent_LoginUser_LoginButton\']')
            .waitForElementVisible('//div[@id=\'Menu1\']/ul/li[4]/a',5000,false)

            //verify Account menu button is correctly labelled
            .verify.containsText('//div[@id=\'Menu1\']/ul/li[6]/a','Account')
            .verify.title('MSDE MARS Portal')

        //main test
            //select the Account button
            .click('//div[@id=\'Menu1\']/ul/li[6]/a')
            .waitForElementVisible('//div[@id=\'MainContent_pnlMyAccount\']/table/tbody/tr/td',5000,false)
            .verify.containsText('//div[@id=\'MainContent_pnlMyAccount\']/table/tbody/tr/td','Account Information')
            .verify.title('MARS - My Account')

            .end();
    }
};

