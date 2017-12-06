/* GL-3
En tant que client API
Je veux pouvoir afficher les listes
de course
Afin de parcourir les listes que j'ai
créées  */

const app = require('../../server');
require('chai').should();
const sinon = require('sinon');
const request = require('supertest');
const Components = require('../../app/components/Components');

describe('add article', function () {
    beforeEach(() => {
        sinon.spy()
    });

    it('should call /article once', function () {
        //////////GIVEN///////////
        let get = sinon.stub(request(app), 'get');
        get.yields();

        let list = {
            getList: function () {
                request(app)
                    .get('/list')
            }
        };

        let getListSpy = sinon.spy(list, 'getList');

        ///////////WHEN///////////
        list.getList();

        ///////////THEN///////////
        sinon.assert.called(getListSpy)
        sinon.assert.callCount(getListSpy, 1)
        getListSpy.restore();
    });


});



