const Address = require('./address')

class User {
    constructor(name) {
        this.name = name
        this.age = 25
        this.verified = true
        this.address = new Address("51 Franklin Street", "Fifth Floor", "Boston", "02110", "USA")
    }

    setAge(age) {
        this.age = age
        return this
    }

    setVerified(verified) {
        this.verified = verified
        return this
    }

    setAddress(address) {
        this.address = address
        return this
    }

    build() {
        if (this.age === null) {
            throw new Error("age is required")
        }
        return this
    }
}

module.exports = User