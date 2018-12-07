module.exports = {
    '@tags': ['mars','portal','financialManagement','claim','smoke'],
    'MARS Portal Financial Management: Site Claim Upload Nav Test':function(browser) {
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

        //main test
            .click('//a[contains(@href, \'FM/SiteClaimUpload.aspx\')]')
            .waitForElementVisible('//table[@id=\'MainContent_Table1\']/tbody/tr/td[5]/table/tbody/tr/td',5000,false)
            .verify.containsText('//table[@id=\'MainContent_Table1\']/tbody/tr/td[5]/table/tbody/tr/td','Site Claim Upload')
            .verify.title('MSDE MARS Portal')
            .end();
    }
};

