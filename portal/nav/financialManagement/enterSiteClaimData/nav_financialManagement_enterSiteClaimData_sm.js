module.exports = {
    '@tags': ['mars','portal','financialManagement','claim','sm','smoke'],
    'MARS Portal Financial Management: Enter Site Claim Data: SM Nav Test':function(browser) {
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

        //verify menu/sub-menu for Financial Management
            .verify.visible('//a[contains(text(),\'Financial Management\')]','Financial Management menu item IS visible')
            .verify.hidden('//a[contains(@href, \'FM/Summary.aspx?f=s\')]','Claim Tracker sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(text(),\'Enter Site Claim Data\')]','Enter Site Claim Data sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'FM/SiteClaimUpload.aspx\')]','Site Claim Upload sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'FM/SponsorClaim.aspx\')]','Submit Claim for Payment sub-menu-item is NOT visible')

        //verify sub-menu items appear when selecting the top level menu-item
            .click('//a[contains(text(),\'Financial Management\')]')
            .waitForElementVisible('//a[contains(@href, \'FM/SponsorClaim.aspx\')]',5000,false)
            .verify.visible('//a[contains(@href, \'FM/Summary.aspx?f=s\')]','Claim Tracker sub-menu-item IS visible')
            .verify.visible('//a[contains(text(),\'Enter Site Claim Data\')]','Enter Site Claim Data sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'FM/SiteClaimUpload.aspx\')]','Site Claim Upload sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'FM/SponsorClaim.aspx\')]','Submit Claim for Payment sub-menu-item IS visible')

        //verify manu-item text is correct
            .verify.containsText('//div[@id=\'Menu1\']/ul/li[3]/a','Financial Management')
            .verify.containsText('//a[contains(@href, \'FM/Summary.aspx?f=s\')]','Claim Tracker')
            .verify.containsText('//ul[@id=\'Menu1:submenu:29\']/li[2]/a','Enter Site Claim Data')
            .verify.containsText('//a[contains(@href, \'FM/SiteClaimUpload.aspx\')]','Site Claim Upload')
            .verify.containsText('//a[contains(@href, \'FM/SponsorClaim.aspx\')]','Submit Claim for Payment')

        //verify menu/sub-menu for Financial Management: Enter Site Claim Data
            .verify.hidden('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=CA&SiteId=\')]','CA sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=FCC&SiteId=\')]','FCC sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=MK&SiteId=\')]','MK sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=SFSP&SiteId=\')]','SFSP sub-menu-item is NOT visible')
            .verify.hidden('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=SM&SiteId=\')]','SM sub-menu-item is NOT visible')

        //verify sub-menu items appear when selecting the top level menu-item
            .moveToElement('//ul[@id=\'Menu1:submenu:29\']/li[2]/a',0,0)
            .verify.visible('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=CA&SiteId=\')]','CA sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=FCC&SiteId=\')]','FCC sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=MK&SiteId=\')]','MK sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=SFSP&SiteId=\')]','SFSP sub-menu-item IS visible')
            .verify.visible('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=SM&SiteId=\')]','SM sub-menu-item IS visible')

        //verify sub-menu items contains proper text
            .verify.containsText('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=CA&SiteId=\')]','CA')
            .verify.containsText('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=FCC&SiteId=\')]','FCC')
            .verify.containsText('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=MK&SiteId=\')]','MK')
            .verify.containsText('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=SFSP&SiteId=\')]','SFSP')
            .verify.containsText('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=SM&SiteId=\')]','SM')

        //main test
            .click('//a[contains(@href, \'FM/SiteClaim.aspx?Domain=SM&SiteId=\')]')
            .waitForElementVisible('//div[@id=\'MainContent_upanelSiteList\']/table[2]/tbody/tr[4]/td/table/tbody/tr/td[2]/span',5000,false)
            .verify.containsText('//div[@id=\'MainContent_upanelSiteList\']/table[2]/tbody/tr[4]/td/table/tbody/tr/td[2]/span','Procurement Contract is Effective')
            .verify.title('MSDE MARS Portal')
            .end();
    }
};

