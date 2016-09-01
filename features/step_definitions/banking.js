const assert = require('cucumber-assert')
const Url = require('url')
const extend = require('xtend')

const config = require('../support/config')

module.exports = function () {

  this.Given(/^I am viewing the home page$/, () => {
    browser.url(Url.format(extend(config.proxy, { pathname: '/' })))
  })

  this.When(/^I click on the counter belonging to "([^"]*)"$/, (personName) => {
    browser.waitForExist('.counter')
    browser.click(`.counter.${personName}`)
  })

  this.Then(/^the counter belonging to "([^"]*)" should read "([^"]*)"$/, function (personName, count, callback) {
    const actualCounter = browser.getText(`.counter.${personName}`)
    const expectedCounter = `${personName} score: ${count}`

    assert.equal(actualCounter, expectedCounter, callback)
  })
}
