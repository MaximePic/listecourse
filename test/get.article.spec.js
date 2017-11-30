/* GL-5
En tant que client API
Je veux lister les articles d'une
liste de course donnée
Afin de connaitre les articles à
acheter */

const request = require('supertest')
require('chai').should()

const app = require('../server')
const mock = require('./fixtures/mock')

// let dataLundi = {};
// let dataMardi = {};
// let standardArticleList = {};

beforeEach(() =>
    dataLundi.push(mock.dataLundi),
    dataMardi.push(mock.dataMardi),
    standardArticleList.push(mock.standardArticleList)
);

afterEach(() => 
     dataLundi.splice(0),
    dataMardi.splice(0),
    standardArticleList.splice(0)
);

//Tests sur l'api /getList/:param
describe('GetListWithParams', () => {
    let monday = "lundi";
    let tuesday = "mardi";

    it('should get monday article list', () => {
        return request(app).get('/getList/' + monday).then((res) => {
            res.body.data.should.eql(dataLundi)
        })
    })

    it('should get tuesday article list', () => {
        return request(app).get('/getList/' + tuesday).then((res) => {
            res.body.data.should.eql(dataMardi)
        })
    })
});
