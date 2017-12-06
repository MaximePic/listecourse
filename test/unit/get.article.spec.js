/* GL-5
En tant que client API
Je veux lister les articles d'une
liste de course donnée
Afin de connaitre les articles à
acheter */

const app = require('../../server');
require('chai').should();
const sinon = require('sinon');
const request = require('supertest');
const Components = require('../../app/components/Components');

describe('get article', function () {
    beforeEach(() => {
        sinon.spy()
    });

    it('should call /list:key once', function () {
        //////////GIVEN///////////
        let get = sinon.stub(request(app), 'get');
        get.yields();

        let day = "lundi";

        let article = {
            getArticle: function (day) {
                request(app)
                    .get('/list/' + day)
            }
        };

        let getArticleSpy = sinon.spy(article, 'getArticle');

        ///////////WHEN///////////
        article.getArticle(day);

        ///////////THEN///////////
        sinon.assert.called(getArticleSpy)
        sinon.assert.callCount(getArticleSpy, 1)
        getArticleSpy.restore();
    });



});
