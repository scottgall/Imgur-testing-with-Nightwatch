module.exports = {
  'NEW POST TEST' : function (browser) {
    browser
      // IMAGE FILE UPLOAD TEST
      .url('http://www.imgur.com')
      .waitForElementVisible('body', 5000)
      .click('.upload')
      .waitForElementVisible('#upload-modal', 5000)
      .assert.urlEquals('https://imgur.com/upload')
      .setValue('input[type = file]', require('path').resolve(__dirname + '/../assets/images/cat.jpg'))
      .waitForElementVisible('.post-container', 5000)
      .assert.urlContains('https://imgur.com/')
      .url((url) => {
        browser.assert.notEqual(url.value, 'https://imgur.com/upload')
       })
      .pause(2000)
      // IMAGE URL UPLOAD TEST (only passes in Chrome)
      // .url('http://www.imgur.com')
      // .waitForElementVisible('body', 5000)
      // .click('.upload')
      // .waitForElementVisible('#upload-modal', 5000)
      // .assert.urlEquals('https://imgur.com/upload')
      // .execute(function() {
      //   document.querySelector('#paste-url-input').value = 'https://www.goodnewsnetwork.org/wp-content/uploads/2015/08/cute-dog-couch-AllPaws-facebook.jpg';
      // })
      // .click('#paste-url-input')
      // .keys(['\uE015', '\uE00D'])
      // .waitForElementVisible('.post-container', 5000)
      // .assert.urlContains('https://imgur.com/')
      // .url((url) => {
      //   browser.assert.notEqual(url.value, 'https://imgur.com/upload')
      // })
      // .pause(2000)
      .end();
  }
};