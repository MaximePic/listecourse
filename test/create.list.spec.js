// /* GL-1
// En tant que client API
// Je veux créer une liste de course
// Afin de me rappeler de ce que je
// dois acheter  */

// const request = require('supertest')
// require('chai').should()

// const app = require('../server')
// const mock = require('./fixtures/mock')
// const Components = require('../app/components/Components')


// let articles = null;
// let List = null;
// let newArticleList = null;

// beforeEach(() =>
//     List = Components.List,
//     articles = mock.articles,
//     newArticleList = mock.newArticleList,
//     standardArticleList = mock.standardArticleList
// );


// describe('AddList', () => {

//     it('should update list with new article', (done) => {
//         let list =  new List("samedi", articles);
//         request(app)
//             .post('/list')
//             .send(list)
//             .expect(newArticleList, done)
//     })
// })
