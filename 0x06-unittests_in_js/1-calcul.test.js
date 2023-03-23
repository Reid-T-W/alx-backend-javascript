const assert = require('assert');
const calculateNumber = require('./1-calcul')
describe(('Testing SUM'), function() {
    it('calculateNumber should return the correct sum', function() {
        assert.equal(calculateNumber('SUM', 1, 3), 4);
    })
    it('calculateNumber should return the correct sum', function() {
        assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    })
    it('calculateNumber should return the correct sum', function() {
        assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    })
    it('calculateNumber should return the correct sum', function() {
        assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    })
    it('checking .5 edge case for odd number', function() {
        assert.equal(calculateNumber('SUM', 3.5, 3.2), 7)
    })
    it('checking .5 edge case for even number', function() {
        assert.equal(calculateNumber('SUM', 3.5, 3.2), 7)
    })
})
describe(('Testing SUBTRACT'), function() {
    it('testing integers with negative answer', function() {
        assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    })
    it('testing integers with postive answer', function() {
        assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
    })
    it('testing integers with postive answer', function() {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    })
    it('testing rounding with negative answer', function() {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    })
    it('testing rounding with postive answer and 0.5 rounding with even num', function() {
        assert.equal(calculateNumber('SUBTRACT', 4.5, 1.4), 4);
    })
    it('testing .5 rounding with odd num', function() {
        assert.equal(calculateNumber('SUBTRACT', 3.5, 1.4), 3);
    })
    it('testing rounding above .5', function() {
        assert.equal(calculateNumber('SUBTRACT', 3.5, 1.6), 2);
    })
})
describe(('Testing DIVIDE'), function() {
    it('testing division when b > a', function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    })
    it('testing division when a > b', function() {
        assert.equal(calculateNumber('DIVIDE', 4.5, 1.4), 5);
    })
    it('testing division when b is 0', function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    })
    it('testing .5 rounding with odd num', function() {
        assert.equal(calculateNumber('DIVIDE', 3.5, 1.4), 4);
    })
    it('testing rounding above .5', function() {
        assert.equal(calculateNumber('DIVIDE', 3.5, 1.6), 2);
    })
})