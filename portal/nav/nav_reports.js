module.exports = {
    '@tags': ['mars','portal','reports','smoke'],
    'MARS Portal Reports Nav Test':function(browser) {
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

            //verify Reports menu button is correctly labelled
            .verify.containsText('//div[@id=\'Menu1\']/ul/li[4]/a','Reports')
            .verify.title('MSDE MARS Portal')

        //main test
            //select the Reports button
            .click('//div[@id=\'Menu1\']/ul/li[4]/a')
            .waitForElementVisible('//table[@id=\'MainContent_tblGlobalSubmit\']/tbody/tr/td',5000,false)
            .verify.containsText('//table[@id=\'MainContent_tblGlobalSubmit\']/tbody/tr/td','Report Catalog')
            .verify.title('MSDE MARS Portal')

            .end();
    }
};

