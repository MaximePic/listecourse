const express = require('express');
const app = express();
const where = require("lodash.where");
const find = require('lodash.find');
const bodyParser = require('body-parser');
const Components = require('./app/components/Components');
const db = require('./test/data/db');

const port = 1997;


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
    res.json({
        status: 'success',
        data: {
            user: { name: 'Jean', age: 45 }
        }
    })
});

//***************************************//
//***************** GL1 *****************//
//**********create.list.spec.js**********//
//***************************************//
app.post('/list', function (req, res) {
    let articles = req.body.articles;
    let key = req.body.key;

    db.courseList[0][key] = articles;
    console.log("LISTEEEEE" + JSON.stringify(db.courseList));

    res.status(200).send(db.courseList);
});

//***************************************//
//***************** GL2 *****************//
//**********delete.list.spec.js**********//
//***************************************//
//TODO

//***************************************//
//***************** GL3 *****************//
//***********get.list.spec.js***********//
//***************************************//
app.get('/list', function (req, res) {
    res.json({
        status: 'success',
        data: db.courseList
    })
});

//****************************************//
//****************** GL4 *****************//
//************add.article.spec.js************//
//****************************************//
app.post('/article', function (req, res) {
    let day = req.body.day;
    let article = req.body.article;

    db.courseList[0][day].push(article);
    res.status(200).send(db.courseList);
});

//***************************************//
//***************** GL5 *****************//
//**********get.article.spec.js**********//
//***************************************//
app.get('/list/:day', function (req, res) {
    let day = req.params.day;
    let result = db.courseList[0][day];
    res.json({
        status: 'success',
        data: result
    })
});

//*******************************************//
//******************* GL6 *******************//
//**********update.article.spec.js***********//
//*******************************************//
app.post('/changeArticleStatus', function(req, res){
    let day = req.body.day;
    let id = req.body.id;
    let articleToUpdate =  find(db.courseList[0][day], {'id':id});
    articleToUpdate.status = "ok";
    res.status(200).send(db.courseList);
});


//Listen port
app.listen(port, function () {
    console.log('Testing app listening on port ' + port)
});

module.exports = app