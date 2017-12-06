/* GL-2
En tant que client API
Je veux pouvoir supprimer une
liste de course
Afin de ne conserver que les listes
qui me sont utiles */

const request = require('supertest');
require('chai').should();

const app = require('../../server');
const mock = require('./../fixtures/mock');
const Components = require('../../app/components/Components');
const courseListFixture = require('./../fixtures/courseList');

//Tests sur l'api /getList/:param
describe('deleteList', () => {

beforeEach(() => {courseListFixture.up()});
afterEach(() => {courseListFixture.down()});

it('delete mardi', (done) => {
    request(app)
    .post('/delete')
    .send({ day: 'mardi' })
    .expect(mock.articleListAfterDeleteList, done)
})

});
