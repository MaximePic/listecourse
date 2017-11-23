/**
 * Created by maxim on 23/11/2017.
 */
const express = require('express')
const app = express()
const articlelist = require('./test/fixtures/article.mock')

app.get('/', function (req, res) {
    res.json({
        status: 'success',
        data: {
            user: { name: 'Jean', age: 45 }
        }
    })
})

app.get('/getList', function (req, res) {
    res.json({
        status: 'success',
        data: articlelist
    })
})

app.get('/getList/:name', function (req, res) {
    res.json({
        status: 'success',
        data: articlelist
    })
})


//Configuration du serveur
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

module.exports = app