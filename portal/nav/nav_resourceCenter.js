module.exports = {
    '@tags': ['mars','portal','resource','smoke'],
    'MARS Portal Resource Center Nav Test':function(browser) {
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
            .waitForElementVisible('//div[@id=\'Menu1\']/ul/li[8]/a',5000,false)

            //verify Resource Center menu button is correctly labelled
            .verify.containsText('//div[@id=\'Menu1\']/ul/li[8]/a','Resource Center')
            .verify.title('MSDE MARS Portal')

        //main test
        //select the Resource Center button
            .click('//div[@id=\'Menu1\']/ul/li[8]/a')
            .waitForElementVisible('//td[2]/table/tbody/tr/td',5000,false)
            .verify.containsText('//td[2]/table/tbody/tr/td','Resource Center')
            .verify.title('MARS - Resource Center')

            .end();
    }
};

