module.exports = {
    '@tags': ['mars','portal','programAdmin','paymentAddressMaint','addNew','smoke'],
    'MARS Portal Program Administration: Payment Address Maintenance: Add New Address Nav Test':function(browser) {
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

            //verify menu/sub-menu for Program Administration: Payment Address Maintenance
            .verify.hidden('//a[contains(@href, \'PaymentAddress.aspx?mode=N\')]','Add New Address sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'PaymentAddress.aspx?mode=U\')]','Update Address sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'PaymentAddress.aspx?mode=V\')]','View Address Requests sub-menu-item is NOT visible')

            //verify sub-menu items appear when selecting the top level menu-item
            .click('//ul[@id=\'Menu1:submenu:3\']/li[3]/a')
            .verify.visible('//a[contains(@href, \'PaymentAddress.aspx?mode=N\')]','Add New Address sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'PaymentAddress.aspx?mode=U\')]','Update Address sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'PaymentAddress.aspx?mode=V\')]','View Address Requests sub-menu-item IS visible')

            //verify sub-menu items contains proper text
            .verify.containsText('//a[contains(@href, \'PaymentAddress.aspx?mode=N\')]','Add New Address')
            .verify.containsText('//a[contains(@href, \'PaymentAddress.aspx?mode=U\')]','Update Address')
            .verify.containsText('//a[contains(@href, \'PaymentAddress.aspx?mode=V\')]','View Address Requests')

        //main test
            .click('//a[contains(text(),\'Add New Address\')]')
            .waitForElementVisible('//span[@id=\'MainContent_wucAddress_lblTitle\']',5000,false)
            .verify.containsText('//span[@id=\'MainContent_wucAddress_lblTitle\']','Payment Address Details')
            .verify.title('Add a New Payment Address')
            .end();
    }
};

