module.exports = {
    '@tags': ['mars','portal','programAdmin','dataUpload','smoke'],
    'MARS Portal Program Administration: Site Data Upload Nav Test':function(browser) {
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

        //main test
            .click('//a[contains(text(),\'Site Data Upload\')]')
            .waitForElementVisible('//table[@id=\'MainContent_Table1\']/tbody/tr/td[5]/table/tbody/tr/td',5000,false)
            .verify.containsText('//table[@id=\'MainContent_Table1\']/tbody/tr/td[5]/table/tbody/tr/td','Site Data Upload')
            .verify.title('MSDE MARS Portal')
            .end();
    }
};

