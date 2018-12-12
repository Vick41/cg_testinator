module.exports = {
    tags: ['functional', 'mdrc'],
    'MDRC Home Page' : function(browser) {

        browser
        .useXpath()
        .url("https://mdrcdev.msde.maryland.gov/")
        //.waitForElementVisible('body', 10000)

         //home link
        .click("//a[@title='Home']")
        .assert.title('Maryland Report Card')  
        .pause(3000)
        .maximizeWindow()
        
        //state link
        .click("//a[@title='State']")
        .pause(4000)
        .verify.visible("//h3[@id='atAGlancePageTitle']")

        //Districts and Schools
        .click("//a[@title='Districts & Schools']")
        .pause(4000)
        .verify.visible("//div[contains(text(),'Search for school by name')]")

        //Introduction
        .click("//a[@title='Introduction']")
        .pause(4000)
        .verify.visible("//h1[contains(text(),'Introduction')]")

        //Help Guides
        .click("//a[@title='Help Guides']")
        .pause(4000)
        .verify.visible("//h1[contains(text(),'Help Guides')]");


     }
};