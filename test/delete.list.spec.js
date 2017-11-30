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

var dataMercredi = [];
var dataMardi = [];

beforeEach(() =>
    dataMercredi.push(mock.dataMercredi)
);

afterEach(() =>
        dataMercredi.splice(0),
    dataMardi.splice(0)
);

//Tests sur l'api /getList/:param
describe('GetListWithParams', () => {
    let wednesday = "mercredi";
    let tuesday = "mardi";

    // xit('should get wednesday article list', () => {
    //     return request(app).get('/list/' + wednesday).then((res) => {
    //         res.body.data.should.eql(mock.dataMercredi)
    //     })
    // })

    it('delete vendredi', (done) => {
        request(app)
            .post('/delete')
            .send({ day: 'mercredi' })
            .expect(mock.deleteMercrediArticleList, done)
            // .expect("success", done)
    })
});
