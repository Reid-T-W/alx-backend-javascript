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
})
