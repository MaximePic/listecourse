/**
 * Created by maxim on 23/11/2017.
 */
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.json({
        status: 'success',
        data: {
            user: { name: 'Jean', age: 45 }
        }
    })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

module.exports = app