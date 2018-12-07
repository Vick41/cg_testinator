module.exports = {
    '@tags':['ec','mars','app','smoke'],
    'MARS Nav Menu -  Eligibility Calculator':function(browser) {
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
            .click('//a[@href=\'' + nav + '/PA/EligibilityCalculator.aspx\']')
            .useCss()
            .waitForElementVisible('body',5000,false)
            .useXpath()
            .waitForElementPresent('//table[@id=\'tblRight\']/tbody/tr[3]/td/table/tbody/tr/td/span',5000,false)
            .verify.containsText('//table[@id=\'tblRight\']/tbody/tr[3]/td/table/tbody/tr/td/span','Eligibility Calculator')
            .verify.title('MARS - Pre Application Process')
            .end();
    }
};

