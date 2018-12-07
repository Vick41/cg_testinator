module.exports = {
    '@tags':['login','mars','app','devOps'],
    'MARS App Login Test':function(browser) {
        var nav = browser.launchUrl + browser.globals.appUrl,
            user = browser.globals.appUN,
            pass = browser.globals.appPW;
        browser
        //login
            .useXpath()
            .url(nav)
            .waitForElementVisible('//body',5000,'Login Page is displayed')
            .setValue('//*[@id="Email"]',user)
            .setValue('//*[@id="Password"]',pass)
            .click('//button[@type=\'submit\']')
            .waitForElementVisible('//body',5000,'Logged in')
            .verify.containsText('//*[@id="dvMsg"]','Welcome back, Tcg User','Correct Username is referenced on Homepage')            
            .verify.visible('//a[@href=\'' + nav + '/PA/Search.aspx\']','Search Menu-item found')
            .verify.visible('//a[@href=\'' + nav + '/PA/EligibilityCalculator.aspx\']','Eligibility Calculator menu-item found')
            .verify.visible('//a[@href=\'' + nav + '/PA/BroadcastNotification.aspx?for=bro\']','Broadcast Notification menu-item found')
            .verify.visible('//a[@href=\'' + nav + '/PA/BroadcastHistory.aspx\']','View Broadcast History menu-item found')
            .verify.visible('//a[contains(@href, \'#OfficeManager\')]','Office Manager menu-item found')
            .verify.visible('//a[contains(@href, \'#ProgramAdmin\')]','Program Admin menu-item found')
            .verify.visible('//a[contains(@href, \'#ProgramCompliance\')]','Program Compliance menu-item found')
            .verify.visible('//a[contains(@href, \'#FinancialManagement\')]','Financial Management menu-item found')
            .verify.visible('//a[contains(@href, \'#Budget\')]','Budget menu-item found')
            .verify.visible('//a[@href=\'' + nav + '/Reports/Reports.aspx\']','Reports menu-item found')
            .verify.visible('//a[contains(@href, \'#SystemAdmin\')]','System Admin menu-item found')
            .verify.visible('//a[@href=\'' + nav + '/Events.aspx\']','Events menu-item found')
            .verify.visible('//a[@href=\'' + nav + '/Home/ChangePassword\']','Change Password menu-item found')
            .end();
    }
};