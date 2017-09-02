'use strict';

let http = require('http');
let fs = require('fs');
let MongoClient = require('mongodb').MongoClient;
// let express = require('express');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    MongoClient.connect('mongodb://localhost:27017/centerupp', function (err, db) {
        if (err) throw err;
        
        db.collection('user').find().toArray(function (err, result) {
            if (err) throw err;
            
            res.write(String(JSON.stringify(result)));
            res.end();
        })
    });
}).listen(1337);


