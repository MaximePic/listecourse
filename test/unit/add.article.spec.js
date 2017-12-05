/* GL-4
 En tant que client API
 Je veux ajouter un nouvel élément
 à partir d'un Nom, à une liste de
 course donnée
 Afin de pouvoir retenir facilement
 l'article à acheter */

const app = require('../../server');
require('chai').should();
const sinon = require('sinon');
const request = require('supertest');
const Components = require('../../app/components/Components');
const Article = Components.Article;


describe('add article', function () {
    beforeEach(() => {
        sinon.spy()
    });

    it('should create article with expected datas', function () {
        //////////GIVEN///////////
        let expectedId = 1;
        let expectedName = "Test";
        let expectedQuantity = 3;
        let expectedStatus = "ok";

        ///////////WHEN///////////
        let article = new Article(1, "Test", 3, "ok");

        ///////////THEN///////////
        sinon.assert.match(article.id, expectedId);
        sinon.assert.match(article.name, expectedName);
        sinon.assert.match(article.quantity, expectedQuantity);
        sinon.assert.match(article.status, expectedStatus);
    });

    it('should call /article once', function () {
        //////////GIVEN///////////
        let post = sinon.stub(request(app), 'post');
        post.yields();      
        let article = {id:3, name:"Iphone", quantity:1, status:"nok"};
        let day = "lundi";
        let articles = {
            addArticle: function (article, day) {
                request(app)
                    .post('/article')
                    .send({article, day})
            }
        };

        let addArticleSpy = sinon.spy(articles, 'addArticle');

        ///////////WHEN///////////
        articles.addArticle(article, day);

        ///////////THEN///////////
        sinon.assert.called(addArticleSpy)
        sinon.assert.callCount(addArticleSpy, 1)
        addArticleSpy.restore();
    });


});
