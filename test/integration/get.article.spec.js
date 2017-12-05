/* GL-5
En tant que client API
Je veux lister les articles d'une
liste de course donnée
Afin de connaitre les articles à
acheter */

const request = require('supertest');
require('chai').should();

const app = require('../../server');
const db = require ('./../data/db');
const mock = require('./../fixtures/mock');
const courseListFixture = require('./../fixtures/courseList');


//Tests sur l'api /getList/:param
describe('GetArticleFromList', () => {
    beforeEach(() => {courseListFixture.up()});
    afterEach(() => {courseListFixture.down()});

    let monday = "lundi";
    let tuesday = "mardi";

    it('should get monday article list', () => {
        return request(app).get('/list/' + monday).then((res) => {
            res.body.data.should.eql(mock.mondayList)
        })
    });

    it('should get tuesday article list', () => {
        return request(app).get('/list/' + tuesday).then((res) => {
            res.body.data.should.eql(mock.tuesdayList)
        })
    })
});
