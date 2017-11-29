/* GL-3
En tant que client API
Je veux pouvoir afficher les listes
de course
Afin de parcourir les listes que j'ai
créées  */

const request = require('supertest')
require('chai').should()

const app = require('../server')
const mock = require('./fixtures/mock')

let standardArticleList = null;

beforeEach(() =>
    standardArticleList = mock.standardArticleList,
);

//Tests sur l'api /getList
describe('GetList', () => {
    it('should get status 200 (success)', () => {
        return request(app).get('/getList').then((res) => {
            res.status.should.equal(200);
            res.body.status.should.equal('success')
        })
    })

    it('should get an object', () => {
        return request(app).get('/getList').then((res) => {
            res.body.data.should.be.an('object')
        })
    })

    it('should get course list', () => {
        return request(app).get('/getList').then((res) => {
            res.body.data.should.eql(standardArticleList)
        })
    })
})

