const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var db

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('link-to-mongodb', (err, database) => {
    // ... start the server
})

MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds213209.mlab.com:13209/quotes-crud', (err, client) => {
    // ... do something here
})

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