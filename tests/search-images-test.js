module.exports = {
  'SEARCH IMAGES TEST' : function (browser) {
    const searchTerm = 'Waffles';
    browser
      .url('http://www.imgur.com')
      .waitForElementVisible('body', 5000)
      .setValue('input[type=text]', searchTerm)
      .click('button[type=submit]')
      .waitForElementVisible('.search-sentence', 5000)
      .assert.urlEquals(`https://imgur.com/search?q=${searchTerm}`)
      .execute(function() {
        return document.querySelector('.search').value;
      }, function(result) {
        browser.assert.equal(result.value, searchTerm)
      });
    browser.expect.element('.search-sentence>span>i').text.to.not.equal('0');
    browser.expect.element('.search-term-text').text.to.equal(searchTerm);
    browser.expect.element('.cards').to.be.present;
    browser
      .execute(function () {
        return (document.querySelector('.matched-search-term').textContent.toLowerCase());
      }, function (result) {
        browser.assert.equal(result.value, searchTerm.toLowerCase());
      })
      .pause(2000)  
      .end();
  }
};
