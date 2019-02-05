module.exports = {
  'SEARCH IMAGES TEST' : function (browser) {
    const searchTerm = 'waffles';
    const regexSearchTerm = new RegExp(searchTerm, 'i');
    browser
      .url('http://www.imgur.com')
      .waitForElementVisible('body', 5000)
      .setValue('input[type=text]', searchTerm)
      .click('button[type=submit]')
      .waitForElementVisible('.search-sentence', 5000)
      .url((url) => {
        browser
          .assert.notEqual(url.value, 'https://imgur.com/');
      })
      .assert.urlEquals(`https://imgur.com/search?q=${searchTerm}`);
    browser.expect.element('.search').value.to.be.equal(searchTerm);
    browser.expect.element('.search-sentence>span>i').text.to.not.equal('0');
    browser.expect.element('.search-term-text').text.to.equal(searchTerm);
    browser.expect.element('.cards').to.be.present;
    browser.moveToElement('img:nth-of-type(1)', 0, 0);
    browser.expect.element('.matched-search-term').text.to.match(regexSearchTerm);
    browser
        .pause(2000)  
        .end();
  }
};
