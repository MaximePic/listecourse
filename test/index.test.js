const request = require('supertest')
require('chai').should()

const app = require('../server')

describe('Index', () => {
    it('should pass', () => {     
        return request(app).get('/').then((res) => {
            res.status.should.equal(200)
    res.body.status.should.equal('success')
    res.body.data.should.be.an('object')
    res.body.data.user.should.eql({
        name: 'Jean',
        age: 45,
    })     
        })
    })
})
