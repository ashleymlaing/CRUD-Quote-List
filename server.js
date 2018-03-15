const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var db

const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function() {
    console.log('listening on 3000')
})

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')
        // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
        // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.

})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})

// console.log('May Node be with you')

MongoClient.connect('mongodb://alaing:noel1129@ds213209.mlab.com:13209/quotes-crud', (err, client) => {
    // ... start the server

    if (err) return console.log(err)
    db = client.db('quotes-crud')

    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})

// MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds213209.mlab.com:13209/quotes-crud', (err, client) => {
//     // ... do something here
// })

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)


        console.log('saved to database')
        res.redirect('/')
    })
})

// app.get('/', (req, res) => {
//     var cursor = db.collection('quotes').find()
// })

// db.collection('quotes').find().toArray(function(err, results) {
//     console.log(results)
//         // send HTML file populated with quotes here
// })