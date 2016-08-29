var test = require('tape')
import Account from '../components/account'

test('testing mix bank app', function (t) {
  t.ok(true)
  t.end()
})

//arrange that the expectedBalance will be +56700-456
//based on two transations in initialState
const expectedBalance = 56244

const testArray = [ {amount: -456}, {amount: 56700} ]

test('calculateBalance uses transactions to calculate balance', function (t) {
  const testAccount = new Account
  const actualBalance = testAccount.calculateBalance(testArray)
  t.equal(expectedBalance, actualBalance)
  t.end()
})
