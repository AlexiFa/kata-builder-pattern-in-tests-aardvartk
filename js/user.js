class User {
    constructor(name) {
        this.name = name
        this.age = null
        this.verified = null
        this.address = null
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