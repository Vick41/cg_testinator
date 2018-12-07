module.exports = {
    '@tags': ['budget','ffvp','mars','app','smoke'],
    'MARS Nav Menu - Budget FFVP':function(browser) {
        var nav = browser.launchUrl + browser.globals.appUrl,
            user = browser.globals.appUN,
            pass = browser.globals.appPW;
        browser
        //login
            .useXpath()
            .url(nav)
            .waitForElementVisible('//body',5000,false)
            .setValue('//*[@id="Email"]',user)
            .setValue('//*[@id="Password"]',pass)
            .click('//button[@type=\'submit\']')
            .waitForElementVisible('//body',5000,false)
            .verify.containsText('//*[@id="dvMsg"]','Welcome back, Tcg User')

        //main test
            .useXpath()
            //check that sub-menu items are not visible
            .verify.hidden('//a[@href=\'' + nav + '/Budget/SRM.aspx\']','SRM menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/Budget/MMFA\']',' MMFA Budgetmenu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/Budget/FFVP.aspx\']','FFVP Budget menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/Budget/Budget.aspx\']','SCNPB menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/Budget/HQExpenditure.aspx\']','HQ Expenditure menu-item is NOT visible')

            //select menu item and verify sub-menu items display
            .click('//a[contains(@href, \'#Budget\')]')

            //wait for all sub-menu items to load
            .waitForElementVisible('//a[@href=\'' + nav + '/Budget/HQExpenditure.aspx\']',5000,false)
            .verify.visible('//a[@href=\'' + nav + '/Budget/SRM.aspx\']','SRM menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/Budget/MMFA\']',' MMFA Budgetmenu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/Budget/FFVP.aspx\']','FFVP Budget menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/Budget/Budget.aspx\']','SCNPB menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/Budget/HQExpenditure.aspx\']','HQ Expenditure menu-item IS visible')

            //select FFVP button and verify table loads on next page
            .click('//a[@href=\'' + nav + '/Budget/FFVP.aspx\']')
            .waitForElementVisible('//*[@id="MainContent_pnlBody"]',5000,false)
            .verify.visible('//*[@id="MainContent_pnlBody"]','Table is present')
            .verify.title('MARS - Budget FFVP')
            .end();
    }
};

