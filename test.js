const reverseString = require('./index.js')
const assert = require('assert')

describe('reverseString Challenge', () => {

    /**
     * TEST DESCRIPTION
     */
    it('Test1', () => {

        let result = reverseString("hola")
        let expected = "aloh"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test2', () => {
        let result = reverseString("roma")
        let expected = "amor"

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test3', () => {
        let result = reverseString("saludos desde la tierra")
        let expected = "arreit al edsed sodulas"

        assert.strictEqual(result,expected)
    })

})
