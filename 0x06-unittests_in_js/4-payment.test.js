const sinon = require('sinon');
const Utils = require('./utils');
const assert = require('assert')
const sendPaymentRequestToApi = require('./4-payment');


describe('Testing sendPaymentRequestToApi', 
    function() {
        var stub_calculateNumber;
        var spy_consoleLog;
        beforeEach(function() {
            stub_calculateNumber = sinon.stub(Utils, 'calculateNumber');
            stub_calculateNumber.returns(10);
            spy_consoleLog = sinon.spy(console, 'log');
        })
        afterEach(function() {
            spy_consoleLog.restore()
            stub_calculateNumber.restore()
        })
    it('checking if the stub is called with the right args', function() {
        sendPaymentRequestToApi(100, 20)
        assert(stub_calculateNumber.calledWith('SUM', 100, 20))
    })
    it('checking if the logging is correct', function() {
        sendPaymentRequestToApi(100, 20)
        assert(spy_consoleLog.calledWith('The total is: 10'))
    })
})