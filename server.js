const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var db

const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')
        // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
        // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.

})

// app.post('/quotes', (req, res) => {
//     console.log("Quotes added : ", req.body)
// })

// console.log('May Node be with you')

MongoClient.connect('mongodb://alaing:Noel1129@ds139984.mlab.com:39984/crud-quotes', (err, client) => {

    if (err) return console.log(err)
    db = client.db('crud-quotes')

    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')
    })
})

app.get('/', (req, res) => {
    var cursor = db.collection('quotes').find()
})