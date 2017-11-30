/* GL-3
En tant que client API
Je veux pouvoir afficher les listes
de course
Afin de parcourir les listes que j'ai
créées  */

const request = require('supertest')
require('chai').should()

const db = require ('./data/db')
const courseListFixture = require('./fixtures/courseList')
const app = require('../server')
const mock = require('./fixtures/mock')


beforeEach(() =>
    courseListFixture.up()
);

afterEach(() =>
    courseListFixture.down()
);

//Tests sur l'api /list
describe('GetList', () => {
    it('should get status 200 (success)', () => {
        return request(app).get('/list').then((res) => {
            res.status.should.equal(200);
            res.body.status.should.equal('success')
        })
    })

    it('should get an array', () => {
        return request(app).get('/list').then((res) => {
            res.body.data.should.be.an('array')
        })
    })

    it('should get course list', () => {
        console.log("courselist = " + db.courseList)
        return request(app).get('/list').then((res) => {
            res.body.data.should.eql(mock.standardArticleList)
        })
    })
})

