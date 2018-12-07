module.exports = {
    'MARS Portal Login':function(browser) {
        var nav = browser.launchUrl + browser.globals.portalUrl,
            user = browser.globals.portalUN,
            pass = browser.globals.portalPW;
        browser
        //login
            .useXpath()
            .url(nav,function() {
                console.log('\nHeading to: ' + nav +  '\n')
            })
            .waitForElementVisible('//body',5000,false)
            .setValue('//input[@id=\'MainContent_LoginUser_UserName\']',user)
            .setValue('//input[@id=\'MainContent_LoginUser_Password\']',pass)
            .click('//input[@id=\'MainContent_LoginUser_LoginButton\']',function() {
                console.log('\nLogging in\n');
            })
            .waitForElementVisible('//body',5000,false)
            .verify.containsText('//span[@id=\'MainContent_QuickLink_lblQuickLinks\']','Quick Links')
            .verify.containsText('//div[@id=\'MainContent_QuickLink_pnlPA\']/table/tbody/tr[2]/td','Program Administration')
            .verify.containsText('//a[@id=\'MainContent_QuickLink_hlPAWorkInProcess\']','Work in Progress')
            .verify.containsText('//a[@id=\'MainContent_QuickLink_hlPAAgency\']','Agency Profile')
            .verify.containsText('//a[@id=\'MainContent_QuickLink_hlPADomain\']','Program Profile')
            .verify.containsText('//a[@id=\'MainContent_QuickLink_hlPASite\']','Site Profile')
            .verify.containsText('//div[@id=\'MainContent_QuickLink_pnlFM\']/table/tbody/tr[2]/td/b','Financial Management')
            .verify.containsText('//a[@id=\'MainContent_QuickLink_hlFMClaimTracker\']','Claim Tracker')
            .verify.containsText('//a[@id=\'MainContent_QuickLink_hlSC\']','Enter Site Claim Data')
            .verify.containsText('//a[@id=\'MainContent_QuickLink_hlFCAE\']','Family - Monthly Financial Report')
            .verify.containsText('//a[@id=\'MainContent_QuickLink_hlSMDC\']','Special Milk Dairy Cost')
            .verify.containsText('//a[@id=\'MainContent_QuickLink_hlFRDM\']','Special Milk – Monthly Financial Report')
            .verify.containsText('//a[@id=\'MainContent_QuickLink_hlPSC\']','Submit Claim For Payment')
            .verify.containsText('//a[@id=\'MainContent_lnkShortMessageHistory\']','[Recent Alerts/News]')
            .verify.title('MSDE MARS Portal')
            .end();
    }
};

