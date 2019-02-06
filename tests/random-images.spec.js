module.exports = {
  'RANDOM IMAGES TEST' : function (browser) {
    let firstImage;
    browser
      .url('http://www.imgur.com')
      .waitForElementVisible('body', 5000)
      .getAttribute('.Post-item-media>img', 'src', function(src) {
        console.log(src.value);
        firstImage = src.value;
      })
      .click('.sort')
      .pause(1000)
      .useXpath()
      // .moveToElement('//div[text() = "Random"]', 0, 0)
      .pause(1000)
      .click('//div[text() = "Random"]')
      .pause(2000)
      .useCss()
      .getAttribute('.Post-item-media>img', 'src', function(src) {
        browser.assert.notEqual(src.value, firstImage);
      })
      .pause(2000)
      .end();
  }
};