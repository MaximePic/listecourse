const request = require('supertest')
require('chai').should()

const app = require('../server')
const articleMock = require('../test/fixtures/article.mock')

describe('GetList', () => {
    it('should get course list', () => {
        return request(app).get('/getList').then((res) => {
            res.status.should.equal(200)
            res.body.status.should.equal('success')
            res.body.data.should.be.an('object')
            res.body.data.should.eql({articleMock})
        })
    })
})
