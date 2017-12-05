/*
/!* GL-4
 En tant que client API
 Je veux ajouter un nouvel élément
 à partir d'un Nom, à une liste de
 course donnée
 Afin de pouvoir retenir facilement
 l'article à acheter *!/

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

    it('should send correct parameters to the expected URL /users', function () {
        //////////////////////////
        //////////GIVEN///////////
        //////////////////////////
        let post = sinon.stub(request(app), 'post');
        post.yields();

        let article = new Article(3, "Iphone", 1, "nok");
        console.log("ARJZEOPRZEOPJ" + JSON.stringify(article));
        let day = "lundi";

        //We'll set up some variables to contain the expected results
        var expectedUrl = '/article';
        var expectedParams = {
            article: {"id": 3, "name": "Iphone", "quantity": 1, "status": "nok"},
            day: 'lundi'
        };

        var articles = {
            addArticle: function (article, day) {
                request(app)
                    .post('/article')
                    .send({
                        article,
                        day
                    })
            }
        };

        //Create a spy for the setName function
        //Now, any time we call the function, the spy logs information about it
        var addArticleSpy = sinon.spy(articles, 'addArticle');

        //////////////////////////
        ///////////WHEN///////////
        //////////////////////////
        articles.addArticle(article, day);


        //////////////////////////
        ///////////THEN///////////
        //////////////////////////
        sinon.assert.calledWith(addArticleSpy, expectedUrl,expectedParams);

        //Important final step - remove the spy
        addArticleSpy.restore();



    });
});


*/
