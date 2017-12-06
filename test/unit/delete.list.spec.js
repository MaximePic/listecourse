/* GL-2
En tant que client API
Je veux pouvoir supprimer une
liste de course
Afin de ne conserver que les listes
qui me sont utiles */

const app = require('../../server');
require('chai').should();
const sinon = require('sinon');
const request = require('supertest');
const Components = require('../../app/components/Components');

describe('delete list', function () {
    beforeEach(() => {
        sinon.spy()
    });

    it('should call /delete once', function () {
        //////////GIVEN///////////
        let post = sinon.stub(request(app), 'post');
        post.yields();

        let day = "mardi";
        let articleList = {
            deleteList: function (day) {
                request(app)
                    .post('/delete')
                    .send({ day: day })
            }
        };

        let deleteListSpy = sinon.spy(articleList, 'deleteList');

        ///////////WHEN///////////
        articleList.deleteList(day);

        ///////////THEN///////////
        sinon.assert.called(deleteListSpy)
        sinon.assert.callCount(deleteListSpy, 1)
        deleteListSpy.restore();
    });
});
