var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongoskin = require('mongoskin');

var db = mongoskin.db("mongodb://127.0.0.1:27017/nivas", {native_parser:true});

var app = express();
var port = 8080;

/*
    DATABASE OPERATIONS
*/
app.use(bodyParser());

app.param('collectionName', function(req, res, next, collectionName){
  req.collection = db.collection(collectionName);
  return next();
});

app.get('/api/:collectionName', function(req, res, next) {
  req.collection.find({} ,{sort: {'_id': 1}}).toArray(function(e, results){
    if (e) return next(e);
    res.send(results);
  });
});

app.post('/api/:collectionName', function(req, res, next) {
  req.collection.insert(req.body, {}, function(e, results){
    if (e) return next(e);
    res.send(results);
  });
});

app.get('/api/:collectionName/:id', function(req, res, next) {
  req.collection.findOne({'_id': req.params.id}, function(e, result){
    if (e) return next(e);
    res.send(result);
  });
});

app.put('/api/:collectionName/:id', function(req, res, next) {
  req.collection.updateById(req.params.id, {$set: req.body}, {safe: true, multi: false}, function(e, result){
    if (e) return next(e);
    res.send((result === 1) ? {msg:'success'} : {msg: 'error'});
  });
});

app.delete('/api/:collectionName/:id', function(req, res, next) {
  req.collection.removeById(req.params.id, function(e, result){
    if (e) return next(e);
    res.send((result === 1)?{msg: 'success'} : {msg: 'error'});
  });
});

app.use('/', express.static(__dirname + '/app'));

app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  req.method = 'get';
  res.redirect('/404.html');
});

app.listen(port, function() {
  console.log('listening localhost:' + port);
});
