module.exports = {
    '@tags': ['mars','portal','programAdmin','agency','policyStatement','smoke'],
    'MARS Portal Program Administration: Application: Agency: Policy Statement Nav Test':function(browser) {
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
            .waitForElementVisible('//body',5000,false)

            //verify Program Administration menu button is correctly labelled
            .verify.containsText('//span[@id=\'MainContent_QuickLink_lblQuickLinks\']','Quick Links')
            .verify.title('MSDE MARS Portal')

        //verify menu/sub-menu for Program Administration
            .verify.visible('//a[contains(text(),\'Program Administration\')]','Program Administration menu item IS visible')
            .verify.hidden('//a[contains(@href, \'PA/Summary.aspx\')]','Summary sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(text(),\'Application\')]','Application sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(text(),\'Payment Address Maintenance\')]','Payment Address Maintenance sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'PA/SiteUpload.aspx\')]','Site Data Upload sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'FM/CEPApplication.aspx\')]','CEP Application sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'PA/FFVPApplication.aspx\')]','FFVP Application sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'PA/MMFAApplication.aspx\')]','MMFA Application sub-menu-item is NOT visible')

        //verify sub-menu items appear when selecting the top level menu-item
            .click('//a[contains(text(),\'Program Administration\')]')
            .waitForElementVisible('//a[contains(@href, \'PA/MMFAApplication.aspx\')]',5000,false)
            .verify.visible('//a[contains(@href, \'PA/Summary.aspx\')]','Summary sub-menu-item IS visible')
            .verify.visible('//a[contains(text(),\'Application\')]','Application sub-menu-item IS visible')
            .verify.visible('//a[contains(text(),\'Payment Address Maintenance\')]','Payment Address Maintenance sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'PA/SiteUpload.aspx\')]','Site Data Upload sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'FM/CEPApplication.aspx\')]','CEP Application sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'PA/FFVPApplication.aspx\')]','FFVP Application sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'PA/MMFAApplication.aspx\')]','MMFA Application sub-menu-item IS visible')

        //verify menu/sub-menu for Program Administration: Application
            .verify.hidden('//ul[@id=\'Menu1:submenu:5\']/li/a','Agency sub-menu-item is NOT visible')
            .verify.hidden('//ul[@id=\'Menu1:submenu:5\']/li[2]/a','Program sub-menu-item is NOT visible')
            .verify.hidden('//ul[@id=\'Menu1:submenu:5\']/li[3]/a','Site sub-menu-item is NOT visible')

        //verify sub-menu items appear when selecting the top level menu-item
            .click('//a[contains(text(),\'Application\')]')
            .waitForElementVisible('//ul[@id=\'Menu1:submenu:5\']/li[3]/a',5000,false)
            .verify.visible('//ul[@id=\'Menu1:submenu:5\']/li/a','Agency sub-menu-item IS visible')
            .verify.visible('//ul[@id=\'Menu1:submenu:5\']/li[2]/a','Program sub-menu-item IS visible')
            .verify.visible('//ul[@id=\'Menu1:submenu:5\']/li[3]/a','Site sub-menu-item IS visible')

        //verify menu/sub-menu for Program Administration: Application: Agency
            .verify.hidden('//ul[@id=\'Menu1:submenu:6\']/li/a','Master Agreement sub-menu-item is NOT visible')
            .verify.hidden('//ul[@id=\'Menu1:submenu:6\']/li[2]/a','Policy Statement sub-menu-item is NOT visible')

        //verify sub-menu items appear when selecting the top level menu-item
            .moveToElement('//a[contains(text(),\'Agency\')]',0,0)
            .waitForElementVisible('//ul[@id=\'Menu1:submenu:6\']/li[2]/a',5000,false)
            .verify.visible('//ul[@id=\'Menu1:submenu:6\']/li/a','Master Agreement sub-menu-item IS visible')
            .verify.visible('//ul[@id=\'Menu1:submenu:6\']/li[2]/a','Policy Statement sub-menu-item IS visible')

        //verify sub-menu items contains proper text
            .verify.containsText('//ul[@id=\'Menu1:submenu:6\']/li/a','Master Agreement')
            .verify.containsText('//ul[@id=\'Menu1:submenu:6\']/li[2]/a','Policy Statement')

        //main test
            .click('//a[contains(text(),\'Policy Statement\')]')
            .waitForElementVisible('//span[@id=\'MainContent_lblTitle\']',5000,false)
            .verify.containsText('//span[@id=\'MainContent_lblTitle\']','Policy Statement')
            .verify.title('MSDE MARS Portal')
            .end();
    }
};

