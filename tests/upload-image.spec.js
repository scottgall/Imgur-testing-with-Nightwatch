module.exports = {
  'UPLOAD IMAGE TEST' : function (browser) {
    browser
      .url('http://www.imgur.com')
      .waitForElementVisible('body', 5000)
      .click('.upload')
      .waitForElementVisible('#upload-modal', 5000)
      .assert.urlEquals('https://imgur.com/upload')
      .setValue('input[type = file]', require('path').resolve(__dirname + '/../assets/images/cat.jpg'))
      .waitForElementVisible('.post-container', 5000)
      .url((url) => {
        browser.assert.notEqual(url.value, 'https://imgur.com/upload')
        browser.expect.element('.copy-input-post').to.have.value.that.equals(url.value)
      })
      .expect.element('.post-image').to.be.present;
    browser
      .pause(2000)
      .end();
  }

};