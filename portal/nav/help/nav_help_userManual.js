module.exports = {
    '@tags': ['mars','portal','help','userManual','smoke'],
    'MARS Portal Help: User Manual Nav Test':function(browser) {
        var nav = browser.launchUrl + browser.globals.portalUrl,
            user = browser.globals.portalUN,
            pass = browser.globals.portalPW;
        browser
        //login
            .useXpath()
            .url(nav)
            .waitForElementVisible('//body',5000,false)
            .setValue('//input[@id=\'MainContent_LoginUser_UserName\']',user)
            .setValue('//input[@id=\'MainContent_LoginUser_Password\']',pass)
            .click('//input[@id=\'MainContent_LoginUser_LoginButton\']')
            .waitForElementVisible('//div[@id=\'Menu1\']/ul/li[7]/a',5000,false)

            //verify Help menu button is correctly labelled
            .verify.containsText('//div[@id=\'Menu1\']/ul/li[7]/a','Help')
            .verify.title('MSDE MARS Portal')

        //verify menu/sub-menu for Help
            .verify.visible('//div[@id=\'Menu1\']/ul/li[7]/a')
            .verify.hidden('//ul[@id=\'Menu1:submenu:71\']/li/a')
            .verify.hidden('//ul[@id=\'Menu1:submenu:71\']/li[2]/a')

        //verify sub-menu items appear when mousing over the top level menu-item
            .click('//div[@id=\'Menu1\']/ul/li[7]/a')
            .waitForElementVisible('//ul[@id=\'Menu1:submenu:71\']/li[2]/a',5000,false)
            .verify.visible('//ul[@id=\'Menu1:submenu:71\']/li/a')
            .verify.visible('//ul[@id=\'Menu1:submenu:71\']/li[2]/a')

        //verify sub-menu items are correctly labelled
            .verify.containsText('//ul[@id=\'Menu1:submenu:71\']/li/a','FAQ')
            .verify.containsText('//ul[@id=\'Menu1:submenu:71\']/li[2]/a','User Manual')

        //main test
            .click('//ul[@id=\'Menu1:submenu:71\']/li[2]/a')
            .verify.title('MSDE MARS Portal')

            .end();
    }
};

