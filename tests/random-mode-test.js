module.exports = {
  'RANDOM MODE TEST' : function (browser) {
    let firstImage;
    browser
      .url('http://www.imgur.com')
      .waitForElementVisible('body', 5000)
      .getAttribute('.Post-item-media>img', 'src', function(src) {
        firstImage = src.value;
      })
      .click('.sort')
      .pause(2000)
      .useXpath()
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