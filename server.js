/**
 * Created by maxim on 23/11/2017.
 */
const express = require('express')
const app = express()
const where = require("lodash.where")
const bodyParser = require('body-parser')
const mockFile = require('./test/fixtures/mock')

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/', function (req, res) {
    res.json({
        status: 'success',
        data: {
            user: { name: 'Jean', age: 45 }
        }
    })
})

//***************************************//
//***************** GL3 *****************//
//***********get.list.spec.js***********//
//***************************************//
app.get('/getList', function (req, res) {
    res.json({
        status: 'success',
        data: mockFile.dataArticle
    })
})


//***************************************//
//***************** GL5 *****************//
//**********get.article.spec.js**********//
//***************************************//
app.get('/getList/:day', function (req, res) {
    let day = req.params.day;
    let filtered = where(mockFile.dataArticle,{day: day});
    res.json({
        status: 'success',
        data: filtered
    })
})

app.post('/createList', function (req, res) {
    
})

app.listen(1997, function () {
    console.log('Example app listening on port 1997!')
})

module.exports = app