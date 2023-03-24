const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');


describe('Testing sendPaymentRequestToApi', function() {
    it('spies on calculateNumber, checking arguments', function() {
        var spy_calculateNumber = sinon.spy(Utils.calculateNumber);
        sendPaymentRequestToApi(100, 200)
        spy_calculateNumber.calledWith(100, 200)
    })
})