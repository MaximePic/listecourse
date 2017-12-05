/* GL-1
En tant que client API
Je veux créer une liste de course
Afin de me rappeler de ce que je
dois acheter  */

const app = require('../../server');
require('chai').should();
const sinon = require('sinon');
const request = require('supertest');
const Components = require('../../app/components/Components');
const Article = Components.Article;


describe('create list', function () {
    beforeEach(() => {
        sinon.spy()
    });

    it('should call /list once', function () {
        //////////GIVEN///////////
        let post = sinon.stub(request(app), 'post');
        post.yields();     

        let article1 = new Article(1, "Pâté", 3, "nok");
        let article2 = new Article(2, "Pain", 1, "nok");
        let articles = [];
        articles.push(article1);
        articles.push(article2);
        let key = "mercredi";
        let articleList = {
            createList: function (articles, key) {
                request(app)
                    .post('/list')
                    .send({articles, key})
            }
        };

        let createListSpy = sinon.spy(articleList, 'createList');

        ///////////WHEN///////////
        articleList.createList(articles, key);

        ///////////THEN///////////
        sinon.assert.called(createListSpy)
        sinon.assert.callCount(createListSpy, 1)
        createListSpy.restore();
    });
});
