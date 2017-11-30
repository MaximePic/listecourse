/* GL-4
En tant que client API
Je veux ajouter un nouvel élément
à partir d'un Nom, à une liste de
course donnée
Afin de pouvoir retenir facilement
l'article à acheter */

const request = require('supertest')
require('chai').should()

const app = require('../server')
const mock = require('./fixtures/mock')
const Components = require('../app/components/Components')


let articles = null;
let Article = null;

beforeEach(() =>
    Article = Components.Article,
    articles = mock.articles,
    standardArticleList = mock.standardArticleList,
    listAfterArticleAdded = mock.listAfterArticleAdded
);


describe('AddArticles', () => {
    // it('should get status 200 (success)', (done) => {
        
    //     let article =  new Article("Iphone", 1, "nok");

    //     request(app)
    //         .post('/article')
    //         .send(article)
    //         .expect(200, done)
    // })

    it('should update list with new article', (done) => {
        let article =  new Article("Iphone", 1, "nok");
        let day = "lundi";

        request(app)
            .post('/article')
            .send({
                article,
                day
            })
            .expect(listAfterArticleAdded, done)
    })
})
