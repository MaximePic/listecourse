/**
 * Created by maxim on 23/11/2017.
 */
const express = require('express')
const app = express()
const articlelist = require('./test/fixtures/article.mock')
const where = require("lodash.where")

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

app.get('/getList/:day', function (req, res) {
    let day = req.params.day;
    let filtered = where(articlelist,{day: day});
    console.log(filtered)
    res.json({
        status: 'success',
        data: filtered
    })
})


//Configuration du serveur
app.listen(1997, function () {
    console.log('Example app listening on port 1997!')
})

module.exports = app