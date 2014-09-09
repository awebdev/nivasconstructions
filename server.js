var express = require('express');
var fs = require('fs');
var mongo = require('mongoskin');
var db = mongo.db("mongodb://127.0.0.1:27017/nivas", {native_parser:true});

var app = express();
var port = 8080;

app.use('/api', function(req, res){
  var collection = req.url.split('/')[1];
  db.collection(collection).find().toArray(function (err, items) {
    res.json(items);
  });
});

app.use('/', express.static(__dirname + '/app'));

app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  req.method = 'get';
  res.redirect('/404.html');
  // next(); // allow further listners
});

app.listen(port, function() {
  console.log('listening localhost:' + port);
});
