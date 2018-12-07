module.exports = {
    '@tags': ['mars','portal','programAdmin','site','sfsp','smoke'],
    'MARS Portal Program Administration: Application: Site: SFSP Nav Test':function(browser) {
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
            .verify.visible('//ul[@id=\'Menu1:submenu:5\']/li/a','Agency sub-menu-item IS visible')
            .verify.visible('//ul[@id=\'Menu1:submenu:5\']/li[2]/a','Program sub-menu-item IS visible')
            .verify.visible('//ul[@id=\'Menu1:submenu:5\']/li[3]/a','Site sub-menu-item IS visible')

            //verify sub-menu items contains proper text
            .verify.containsText('//ul[@id=\'Menu1:submenu:5\']/li/a','Agency')
            .verify.containsText('//ul[@id=\'Menu1:submenu:5\']/li[2]/a','Program')
            .verify.containsText('//ul[@id=\'Menu1:submenu:5\']/li[3]/a','Site')

            //verify menu/sub-menu for Program Administration: Application: Site
            .verify.hidden('//a[contains(@href, \'AppFormSelectSite.aspx?did=CA\')]','CA sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'AppFormSelectSite.aspx?did=FCC\')]','FCC sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'AppFormSelectSite.aspx?did=MK\')]','MK sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'AppFormSelectSite.aspx?did=SFSP\')]','SFSP sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'AppFormSelectSite.aspx?did=SM\')]','SM sub-menu-item is NOT visible')

            //verify sub-menu items appear when selecting the top level menu-item
            .moveToElement('//a[contains(@href, \'AppFormSelectSite.aspx\')]',0,0)
            .verify.visible('//a[contains(@href, \'AppFormSelectSite.aspx?did=CA\')]','CA sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'AppFormSelectSite.aspx?did=FCC\')]','FCC sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'AppFormSelectSite.aspx?did=MK\')]','MK sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'AppFormSelectSite.aspx?did=SFSP\')]','SFSP sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'AppFormSelectSite.aspx?did=SM\')]','SM sub-menu-item IS visible')

            //verify sub-menu items contains proper text
            .verify.containsText('//a[contains(@href, \'AppFormSelectSite.aspx?did=CA\')]','CA')
            .verify.containsText('//a[contains(@href, \'AppFormSelectSite.aspx?did=FCC\')]','FCC')
            .verify.containsText('//a[contains(@href, \'AppFormSelectSite.aspx?did=MK\')]','MK')
            .verify.containsText('//a[contains(@href, \'AppFormSelectSite.aspx?did=SFSP\')]','SFSP')
            .verify.containsText('//a[contains(@href, \'AppFormSelectSite.aspx?did=SM\')]','SM')

        //main test
            .click('//a[contains(text(),\'SFSP\')]')
            .waitForElementVisible('//div[@id=\'MainContent_SiteList_Panel1\']/table/tbody/tr/td[2]',5000,false)
            .verify.containsText('//div[@id=\'MainContent_SiteList_Panel1\']/table/tbody/tr/td[2]','Site Profile')
            .verify.title('MSDE MARS Portal')
            .end();
    }
};

