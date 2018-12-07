module.exports = {
    '@tags': ['mars','portal','tools','streamlineDataEntry','fcc','smoke'],
    'MARS Portal Tools: Streamline Data Entry: FCC Nav Test':function(browser) {
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
            .waitForElementVisible('//div[@id=\'Menu1\']/ul/li[5]/a',5000,false)

            //verify Help menu button is correctly labelled
            .verify.containsText('//div[@id=\'Menu1\']/ul/li[5]/a','Tools')
            .verify.title('MSDE MARS Portal')

            //verify menu/sub-menu for Tools
            .verify.visible('//div[@id=\'Menu1\']/ul/li[7]/a','Tools menu IS visible')
            .verify.hidden('//a[contains(text(),\'NDL\')]','NDL sub-menu is NOT visible')
            .verify.hidden('//ul[@id=\'Menu1:submenu:42\']/li[2]/a','Global Update sub-menu is NOT visible')
            .verify.hidden('//ul[@id=\'Menu1:submenu:42\']/li[3]/a','Global Remove Meal sub-menu is NOT visible')
            .verify.hidden('//a[contains(text(),\'Global Submission\')]','Global Submission sub-menu is NOT visible')
            .verify.hidden('//ul[@id=\'Menu1:submenu:42\']/li[5]/a','Streamline Data Entry sub-menu is NOT visible')
            .verify.hidden('//a[contains(text(),\'Global Close Site\')]','Global Close Site sub-menu is NOT visible')
            .verify.hidden('//a[contains(text(),\'Direct Certification\')]','Direct Certification sub-menu is NOT visible')
            .verify.hidden('//a[contains(@href, \'October31st.aspx\')]','Oct 31 Data Collection sub-menu is NOT visible')
            .verify.hidden('//a[contains(@href, \'CEPTool.aspx\')]','CEP Tool sub-menu is NOT visible')
            .verify.hidden('//a[contains(text(),\'FNS-742\')]','FNS-742 sub-menu is NOT visible')
            .verify.hidden('//a[contains(text(),\'User Management\')]','User Management sub-menu is NOT visible')

            //verify sub-menu items appear when mousing over the top level menu-item
            .click('//div[@id=\'Menu1\']/ul/li[5]/a')
            .waitForElementVisible('//a[contains(text(),\'User Management\')]',5000,false)
            .verify.visible('//a[contains(text(),\'NDL\')]','NDL sub-menu IS visible')
            .verify.visible('//ul[@id=\'Menu1:submenu:42\']/li[2]/a','Global Update sub-menu IS visible')
            .verify.visible('//ul[@id=\'Menu1:submenu:42\']/li[3]/a','Global Remove Meal sub-menu IS visible')
            .verify.visible('//a[contains(text(),\'Global Submission\')]','Global Submission sub-menu IS visible')
            .verify.visible('//ul[@id=\'Menu1:submenu:42\']/li[5]/a','Streamline Data Entry sub-menu IS visible')
            .verify.visible('//a[contains(text(),\'Global Close Site\')]','Global Close Site sub-menu IS visible')
            .verify.visible('//a[contains(text(),\'Direct Certification\')]','Direct Certification sub-menu IS visible')
            .verify.visible('//a[contains(@href, \'October31st.aspx\')]','Oct 31 Data Collection sub-menu IS visible')
            .verify.visible('//a[contains(@href, \'CEPTool.aspx\')]','CEP Tool sub-menu IS visible')
            .verify.visible('//a[contains(text(),\'FNS-742\')]','FNS-742 sub-menu IS visible')
            .verify.visible('//a[contains(text(),\'User Management\')]','User Management sub-menu IS visible')

            //verify sub-menu items are correctly labelled
            .verify.containsText('//ul[@id=\'Menu1:submenu:42\']/li/a','NDL')
            .verify.containsText('//ul[@id=\'Menu1:submenu:42\']/li[2]/a','Global Update')
            .verify.containsText('//ul[@id=\'Menu1:submenu:42\']/li[3]/a','Global Remove Meal')
            .verify.containsText('//ul[@id=\'Menu1:submenu:42\']/li[4]/a','Global Submission')
            .verify.containsText('//ul[@id=\'Menu1:submenu:42\']/li[5]/a','Streamline Data Entry')
            .verify.containsText('//ul[@id=\'Menu1:submenu:42\']/li[6]/a','Global Close Site')
            .verify.containsText('//ul[@id=\'Menu1:submenu:42\']/li[7]/a','Direct Certification')
            .verify.containsText('//a[contains(@href, \'October31st.aspx\')]','Oct 31 Data Collection')
            .verify.containsText('//a[contains(@href, \'CEPTool.aspx\')]','CEP Tool')
            .verify.containsText('//ul[@id=\'Menu1:submenu:42\']/li[10]/a','FNS-742')
            .verify.containsText('//ul[@id=\'Menu1:submenu:42\']/li[11]/a','User Management')

            //verify menu/sub-menu for Tools: Global Update
            .verify.hidden('//ul[@id=\'Menu1:submenu:57\']/li/a','CA sub-menu is NOT visible')
            .verify.hidden('//ul[@id=\'Menu1:submenu:57\']/li[2]/a','FCC sub-menu is NOT visible')
            .verify.hidden('//ul[@id=\'Menu1:submenu:57\']/li[3]/a','SFSP sub-menu is NOT visible')
            .verify.hidden('//ul[@id=\'Menu1:submenu:57\']/li[4]/a','SM sub-menu is NOT visible')

            //verify sub-menu items appear when mousing over the top level menu-item
            .moveToElement('//ul[@id=\'Menu1:submenu:42\']/li[5]/a',0,0)
            .verify.visible('//ul[@id=\'Menu1:submenu:57\']/li/a','CA sub-menu IS visible')
            .verify.visible('//ul[@id=\'Menu1:submenu:57\']/li[2]/a','FCC sub-menu IS visible')
            .verify.visible('//ul[@id=\'Menu1:submenu:57\']/li[3]/a','SFSP sub-menu IS visible')
            .verify.visible('//ul[@id=\'Menu1:submenu:57\']/li[4]/a','SM sub-menu IS visible')

            //verify sub-menu items are correctly labelled
            .verify.containsText('//ul[@id=\'Menu1:submenu:57\']/li/a','CA')
            .verify.containsText('//ul[@id=\'Menu1:submenu:57\']/li[2]/a','FCC')
            .verify.containsText('//ul[@id=\'Menu1:submenu:57\']/li[3]/a','SFSP')
            .verify.containsText('//ul[@id=\'Menu1:submenu:57\']/li[4]/a','SM')

        //main test
            .click('//ul[@id=\'Menu1:submenu:57\']/li[2]/a')
            .waitForElementVisible('//table[@id=\'MainContent_tblStreamline\']/tbody/tr/td',5000,false)
            .verify.containsText('//table[@id=\'MainContent_tblStreamline\']/tbody/tr/td','Streamline Site Application Data Entry')
            .verify.title('MSDE MARS Portal')
            .end();
    }
};

