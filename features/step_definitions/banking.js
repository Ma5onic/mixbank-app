const assert = require('cucumber-assert')
const Url = require('url')
const extend = require('xtend')

const config = require('../support/config')

module.exports = function () {

  this.Given(/^I am viewing the login page$/, () => {
    browser.url(Url.format(extend(config.proxy, { pathname: '/login' })))
  })

  this.When('I enter "$string" and "$string" and press submit', (name, passwd) => {
    browser.waitForExist('.login')
    browser.setValue('input[name="userName"]', name)
    browser.setValue('input[name="password"]', passwd)
    browser.keys(['Enter'])
  })

  this.Then('I am asked to check my password and sign in again', () => {
    var actualText = browser.getText('p')
    expect(actualText).toEqual('Oops wrong name or password') 
  })

  this.Then(/^I am taken to the main page$/, () => {
    browser.url(Url.format(extend(config.proxy, { pathname: '/' })))
  })

  this.Then('I see a header "$string"', (text) => {
    browser.waitForExist("h1")
    var actualText = browser.getText('h1')
    expect(actualText).toEqual(text)
  })

}
