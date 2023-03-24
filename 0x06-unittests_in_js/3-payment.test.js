const sinon = require('sinon');
const Utils = require('./utils');
const assert = require('assert')
const sendPaymentRequestToApi = require('./3-payment');


describe('Testing sendPaymentRequestToApi', 
    function() {
        var spy_calculateNumber;
        beforeEach(function() {
            spy_calculateNumber = sinon.spy(Utils, 'calculateNumber');
        })
        afterEach(function() {
            spy_calculateNumber.restore()
        })
    it('spies on calculateNumber, checking arguments', function() {
        sendPaymentRequestToApi(100, 200)
        spy_calculateNumber.calledWith(100, 200)
        assert(spy_calculateNumber.calledOnce)
    })
    it('checking if the calculateNumber Function is called once', function() {
        // var spy_calculateNumber = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 200)
        assert(spy_calculateNumber.calledOnce)
    })
})