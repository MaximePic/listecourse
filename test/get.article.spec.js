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

let dataLundi = null;
let dataMardi = null;

beforeEach(() =>
    dataLundi = mock.dataLundi,
    dataMardi = mock.dataMardi
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
