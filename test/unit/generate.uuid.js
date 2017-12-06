const sinon = require('sinon');
const generateUuid = require('../fixtures/generateUuid');


describe('generate uuid', function () {
    beforeEach(() => {
        sinon.spy()
    });

    it('should be number and length equals 13', function () {

        let expectedLength = 13;
        let expectedType = "number";

        let uuid = generateUuid.generateUuid();

        sinon.assert.match(typeof(uuid), expectedType);
        sinon.assert.match(uuid.toString().length, expectedLength);

    });
});
