const test = require('tape')

const Address = require('../address')
const Shop = require('../shop')
const UserBuilder = require('../userBuilder')

const parisAddress = new Address("33 quai d'Orsay", "", "Paris", "75007", "France")

test('happy path', t => {
    const user = new UserBuilder("Bob").build()

    t.true(Shop.canOrder(user))
    t.false(Shop.mustPayForeignFee(user))
    t.end()
})

test('minor users cannot order from the shop', t => {
    const user = new UserBuilder("Bob")
        .setAge(16)
        .build()

    t.false(Shop.canOrder(user))
    t.end()
})

test('must be a verified user to order from the shop', t => {
    const user = new UserBuilder("Bob")
        .setVerified(false)
        .build()

    t.false(Shop.canOrder(user))
    t.end()
})

test('foreigners must pay foreign fee', t => {
    const user = new UserBuilder("Bob")
        .setAddress(parisAddress)
        .build()

    t.true(Shop.mustPayForeignFee(user))
    t.end()
})