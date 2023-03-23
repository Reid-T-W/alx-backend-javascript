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
    it('checking .5 edge case for odd number', function() {
        assert.equal(calculateNumber(3.5, 3.2), 7)
    })
    it('checking .5 edge case for even number', function() {
        assert.equal(calculateNumber(3.5, 3.2), 7)
    })
})
