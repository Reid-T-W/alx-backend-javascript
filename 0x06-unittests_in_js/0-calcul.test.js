const assert = require('assert');
const calculateNumber = require('./0-calcul')
describe(('0-calcul'), function() {
    it('calculateNumber should return the correct sum', function() {
        assert.equal(calculateNumber(1, 3), 4);
    })
    it('calculateNumber should return the correct sum', function() {
        assert.equal(calculateNumber(1, 3.7), 5);
    })
    it('calculateNumber should return the correct sum', function() {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    })
    it('calculateNumber should return the correct sum', function() {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    })
    it('passing a string should return NaN', function() {
        assert.equal(isNaN(calculateNumber("number", 3.7)), true)
    })
    it('passing a string should return NaN', function() {
        assert.equal(isNaN(calculateNumber(3.7, "number")), true)
    })
    it('passing a string should return NaN', function() {
        assert.equal(isNaN(calculateNumber("number", "number")), true)
    })
})
