const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai')
describe(('Testing SUM'), function() {
    it('calculateNumber should return the correct sum', function() {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    })
    it('calculateNumber should return the correct sum', function() {
        expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    })
    it('calculateNumber should return the correct sum', function() {
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    })
    it('calculateNumber should return the correct sum', function() {
        expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    })
    it('checking .5 edge case for odd number', function() {
        expect(calculateNumber('SUM', 3.5, 3.2)).to.equal(7);
    })
    it('checking .5 edge case for even number', function() {
        expect(calculateNumber('SUM', 3.5, 3.2)).to.equal(7);
    })
})
describe(('Testing SUBTRACT'), function() {
    it('testing integers with negative answer', function() {
        expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    })
    it('testing integers with postive answer', function() {
        expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    })
    it('testing integers with postive answer', function() {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    })
    it('testing rounding with negative answer', function() {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    })
    it('testing rounding with postive answer and 0.5 rounding with even num', function() {
        expect(calculateNumber('SUBTRACT', 4.5, 1.4)).to.equal(4);
    })
    it('testing .5 rounding with odd num', function() {
        expect(calculateNumber('SUBTRACT', 3.5, 1.4)).to.equal(3);
    })
    it('testing rounding above .5', function() {
        expect(calculateNumber('SUBTRACT', 3.5, 1.6)).to.equal(2);
    })
})
describe(('Testing DIVIDE'), function() {
    it('testing division when b > a', function() {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    })
    it('testing division when a > b', function() {
        expect(calculateNumber('DIVIDE', 4.5, 1.4)).to.equal(5);
    })
    it('testing division when b is 0', function() {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    })
    it('testing .5 rounding with odd num', function() {
        expect(calculateNumber('DIVIDE', 3.5, 1.4)).to.equal(4);
    })
    it('testing rounding above .5', function() {
        expect(calculateNumber('DIVIDE', 3.5, 1.6)).to.equal(2);
    })
})