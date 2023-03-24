const assert = require('assert')
const getPaymentTokenFromAPI = require('./6-payment_token')

describe(('getPaymentTokenFromAPI'), function() {
    it('should test an async function', (done) => {
        getPaymentTokenFromAPI(true).
        then(function (data) {
            assert.equal(data.data, 'Successful response from the API');
            done();
        }).catch(err => {
            done(err);
        })
    })
})