const sinon = require('sinon');
const assert = require('assert')
const sendPaymentRequestToApi = require('./5-payment');


describe('Testing sendPaymentRequestToApi', 
    function() {
        // var stub_calculateNumber;
        var spy_consoleLog;
        beforeEach(function() {
            spy_consoleLog = sinon.spy(console, 'log');
        })
        afterEach(function() {
            spy_consoleLog.restore()
        })
    it('log checking with 100 and 20 as args', function() {
        sendPaymentRequestToApi(100, 20)
        assert(spy_consoleLog.calledWith('The total is: 120'));
        assert(spy_consoleLog.calledOnce)
    })
    it('log checking with 10 and 10 as args', function() {
        sendPaymentRequestToApi(10, 10)
        assert(spy_consoleLog.calledWith('The total is: 20'))
        assert(spy_consoleLog.calledOnce)
    })
})