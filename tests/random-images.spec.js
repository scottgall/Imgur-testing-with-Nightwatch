module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.imgur.com')
      .waitForElementVisible('body')
      // .setValue('input[type=text]', 'waffles')
      // .useXpath() // every selector now must be xpath
      .click('.sort')
      .pause(1000)
      .useXpath()
      .moveToElement('//div[text() = "Random"]', 0, 0)
      .pause(2000)
      .click('//div[text() = "Random"]')
      // .click('//*[@id="root"]/div/div[1]/div/div[1]/div[6]/div[1]/span[2]/div/div[2]/div[2]/div[3]')
      // .click("//div[contains(@class, 'Dropdown-option') and text()='Random']")
      // .click('span[class="Button-label"]')

      // .waitForElementVisible('body')
      // .setValue('#paste-url-input', 'https://images.pexels.com/photos/259803/pexels-photo-259803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
      .pause(20000)

      // .setValue('input[type=text]', 'nightwatch')
      // .waitForElementVisible('input[name=btnK]')
      // .click('input[name=btnK]')
      // .pause(1000)
      // .assert.containsText('#main', 'Night Watch')
      .end();
  }
};

//*[@id="root"]/div/div[1]/div/div[1]/div[6]/div[1]/span[2]/div/div[2]/div[2]/div[3]