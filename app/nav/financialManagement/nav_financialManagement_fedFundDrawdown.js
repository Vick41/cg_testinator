module.exports = {
    '@tags': ['fm','fed','fundDrawdown','mars','app','qa2','smoke'],
    'MARS Nav Menu - Office Manager Workspace':function(browser) {
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
            .verify.hidden('//a[@href=\'' + nav + '/FM/FMWorkQueue.aspx\']','FM Work Queue menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/PaymentAddressMaintenance.aspx\']','Payment Address Main. menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/ClaimInput.aspx?Claim=Domain&AID=*&Source=CI\']','Claim Input/View menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/ClaimProcess.aspx\']','Claim Process menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/PaymentProcess.aspx\']','Payment Process menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/FedFundDrawdown.aspx\']','Fed Fund Drawdown menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/FNS\']','Federal Report menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/HQFund.aspx\']','HQ Fund menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/AdvancePayment.aspx\']','Advance Payment menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/MoneyOnlyAdjustment.aspx\']','Money Only Adjustment menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/Grant.aspx\']','Grant menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/Invoice.aspx\']','Invoice menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/ScheduledPayment.aspx\']','Scheduled Payment menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/AFRReporting.aspx\']','AFR menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/PA/Provision.aspx\']','P2 Management menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/Oct31.aspx\']','October 31st Process menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/AgencyMailCodeCheck.aspx\']','Agency Mail Code Check menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/RetroClaimRevision.aspx\']','Retro Claim Revision menu-item is NOT visible')
            .verify.hidden('//a[@href=\'' + nav + '/FM/AuditReportNotification.aspx\']','Audit Report Notification menu-item is NOT visible')

        //select menu item and verify sub-menu items display
            .click('//a[contains(@href, \'#FinancialManagement\')]')

            //wait for all sub-menu items to load
            .waitForElementVisible('//a[@href=\'' + nav + '/FM/AuditReportNotification.aspx\']',5000,false)
            .verify.visible('//a[@href=\'' + nav + '/FM/FMWorkQueue.aspx\']','FM Work Queue menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/PaymentAddressMaintenance.aspx\']','Payment Address Main. menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/ClaimInput.aspx?Claim=Domain&AID=*&Source=CI\']','Claim Input/View menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/ClaimProcess.aspx\']','Claim Process menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/PaymentProcess.aspx\']','Payment Process menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/FedFundDrawdown.aspx\']','Fed Fund Drawdown menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/FNS\']','Federal Report menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/HQFund.aspx\']','HQ Fund menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/AdvancePayment.aspx\']','Advance Payment menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/MoneyOnlyAdjustment.aspx\']','Money Only Adjustment menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/Grant.aspx\']','Grant menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/Invoice.aspx\']','Invoice menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/ScheduledPayment.aspx\']','Scheduled Payment menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/AFRReporting.aspx\']','AFR menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/PA/Provision.aspx\']','P2 Management menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/Oct31.aspx\']','October 31st Process menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/AgencyMailCodeCheck.aspx\']','Agency Mail Code Check menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/RetroClaimRevision.aspx\']','Retro Claim Revision menu-item IS visible')
            .verify.visible('//a[@href=\'' + nav + '/FM/AuditReportNotification.aspx\']','Audit Report Notification menu-item IS visible')

        //select All Workspace button and verify table loads on next page
            .click('//a[@href=\'' + nav + '/FM/FedFundDrawdown.aspx\']')
            .waitForElementVisible('//*[@id="MainContent_pnlBody"]',5000,false)
            .verify.visible('//*[@id="MainContent_pnlBody"]','Table is present')
            .verify.title('MARS - Fed Fund Drawdown')
            .end();
    }
};

