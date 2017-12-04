/* GL-1
En tant que client API
Je veux créer une liste de course
Afin de me rappeler de ce que je
dois acheter  */

const request = require('supertest');
require('chai').should();

const app = require('../server');
const mock = require('./fixtures/mock');
const Components = require('../app/components/Components');
const Article = Components.Article;
const courseListFixture = require('./fixtures/courseList');

describe('AddList', () => {

    beforeEach(() => {courseListFixture.up()});
    afterEach(() => {courseListFixture.down()});

    it('should update list with new article', (done) => {
        let article1 = new Article(1, "Pâté", 3, "nok");
        let article2 = new Article(2, "Pain", 1, "nok");
        let key = "mercredi";

        let articles = [];
        articles.push(article1);
        articles.push(article2);
        
        request(app)
            .post('/list')
            .send({articles, key})
            .expect(mock.articleListAfterNewList, done)
    })
});
