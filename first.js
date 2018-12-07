module.exports = {
    '@tags': ['test'],
    'Demo test': function(browser) {
        browser
            .url('http://nightwatchjs.org/')
            .useXpath()
            //verify Home Page
            .waitForElementPresent('//body',5000,false)
            .waitForElementVisible('//a[contains(text(),\'Home\')]',5000,false)
            .waitForElementVisible('//a[contains(text(),\'Getting Started\')]',5000,false)
            .waitForElementVisible('//a[contains(text(),\'Developer Guide\')]',5000,false)
            .verify.title('Nightwatch.js | Node.js powered End-to-End testing framework')
            .verify.visible('//a[contains(text(),\'Home\')]','Home link is visible')
            .verify.containsText('//a[contains(text(),\'Home\')]','Home')
            .verify.visible('//a[contains(text(),\'Getting Started\')]','Getting Started link is visible')
            .verify.containsText('//a[contains(text(),\'Getting Started\')]','Getting Started')
            .verify.visible('//a[contains(text(),\'Developer Guide\')]','Developer Guide link is visible')
            .verify.containsText('//a[contains(text(),\'Developer Guide\')]','Developer Guide')
            .verify.title('Nightwatch.js | Node.js powered End-to-End testing framework')

            .click('//a[contains(text(),\'Getting Started\')]')

            //verify Getting Started Page
            .waitForElementPresent('//body',5000,false)
            .verify.title('Getting Started | Nightwatch.js')

            .click('//a[contains(@href, \'/guide\')]')

            //verify Developer's Guide page
            .waitForElementPresent('//body',5000,false)
            .verify.title('Developer Guide | Nightwatch.js')
            .end();
    }
};