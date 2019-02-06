module.exports = {
  'UPLOAD IMAGE TEST' : function (browser) {

    browser
      .url('http://www.imgur.com')
      .waitForElementVisible('body', 5000)
      .click('.upload')
      .waitForElementVisible('#upload-modal', 5000);
    browser.assert.urlEquals('https://imgur.com/upload');
    browser.setValue('input[type = file]', require('path').resolve(__dirname + '/../assets/images/cat.jpg'))
      .waitForElementVisible('.post-container', 5000)
    assert.urlContains('https://imgur.com/')
      .url((url) => {
        browser.assert.notEqual(url.value, 'https://imgur.com/upload')
       });
    browser
      .pause(2000)
      .end();
  }

};