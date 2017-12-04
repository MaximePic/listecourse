/* GL-6
En tant que client API
Je veux flaguer des articles de ma
liste de course comme OK
Afin de savoir quels articles j'ai
déjà acheté */


const request = require('supertest');
require('chai').should();
const app = require('../server');
const mock = require('./fixtures/mock');
const Components = require('../app/components/Components');
const Article = Components.Article;
const db = require ('./data/db');
const courseListFixture = require('./fixtures/courseList');

describe('UpdateArticles', () => {
    beforeEach(() => {courseListFixture.up()});
    afterEach(() => {courseListFixture.down()});

    it('should get status 200 (success)', (done) => {
        let day = "lundi";
        let id = 1;

        request(app)
            .post('/changeArticleStatus')
            .send({
                day,
                id})
            .expect(200, done)
    });

    it('should update list with new article', (done) => {
        let day = "lundi";
        let id = 1;
        request(app)
            .post('/changeArticleStatus')
            .send({
                day,
                id
            })
            .expect(mock.articleListAfterUpdate, done)
    })
});
