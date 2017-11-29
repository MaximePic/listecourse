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
let List = null;
let newArticleList = null;

beforeEach(() =>
    List = Components.List,
    articles = mock.articles,
    newArticleList = mock.newArticleList,
    standardArticleList = mock.standardArticleList
);


describe('UpdateList', () => {
    it('should get status 200 (success)', (done) => {
        
        let list =  new List("samedi", articles);
        request(app)
            .post('/list')
            .send(list)
            .expect(200, done)
    })

    it('should update list with new article', (done) => {
        let list =  new List("samedi", articles);
        request(app)
            .post('/list')
            .send(list)
            .expect(newArticleList, done)
    })
})
