/* GL-6
En tant que client API
Je veux flaguer des articles de ma
liste de course comme OK
Afin de savoir quels articles j'ai
déjà acheté */

const app = require('../../server');
require('chai').should();
const sinon = require('sinon');
const request = require('supertest');
const Components = require('../../app/components/Components');
const generateID = require('./../fixtures/generateUuid');


describe('update article', function () {
    beforeEach(() => {
        sinon.spy()
    });

    it('should call /changeArticleStatus once', function () {
        //////////GIVEN///////////
        let post = sinon.stub(request(app), 'post');
        post.yields();

        let day = "lundi";
        let id = generateID.generateUuid();

        let articles = {
            updateArticle: function (day, id) {
                request(app)
                    .post('/changeArticleStatus')
                    .send({day, id})
            }
        };

        let updateArticleSpy = sinon.spy(articles, 'updateArticle');

        ///////////WHEN///////////
        articles.updateArticle(day, id);

        ///////////THEN///////////
        sinon.assert.called(updateArticleSpy)
        sinon.assert.callCount(updateArticleSpy, 1)
        updateArticleSpy.restore();
    });


});
