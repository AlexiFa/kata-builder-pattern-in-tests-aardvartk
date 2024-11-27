const Address = require('./address')
const User = require('./user')

class UserBuilder {
    constructor(name) {
        this.name = name
        this.age = 25
        this.verified = true
        this.address = new Address("51 Franklin Street", "Fifth Floor", "Boston", "02110", "USA")
    }

    build() {
        if (this.age === null) {
            throw new Error("age is required")
        }
        return new User(this.name, this.age, this.verified, this.address)
    }

    minor() {
        this.age = 17
        return this
    }

    notVerified() {
        this.verified = false
        return this
    }

    foreign() {
        this.address = new Address("33 quai d'Orsay", "", "Paris", "75007", "France")
        return this
    }
}

module.exports = UserBuilder