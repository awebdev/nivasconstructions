var mongoskin = require('mongoskin');
var mongodb = mongoskin.db("mongodb://127.0.0.1:27017/nivas", {native_parser:true});

exports.useCollection = function(req, res, next, collectionName){
    req.collection = mongodb.collection(collectionName);
    return next();
  }

exports.getCollection = function(req, res, next) {
    req.collection.find({} ,{sort: {'_id': 1}}).toArray(function(e, results){
      if (e) return next(e);
      res.send(results);
    });
  };

exports.insertCollection = function(req, res, next) {
    req.collection.insert(req.body, {}, function(e, results){
      if (e) return next(e);
      res.send(results);
    });
  };

exports.findById = function(req, res, next) {
    req.collection.findOne({'_id': req.params.id}, function(e, result){
      if (e) return next(e);
      res.send(result);
    });
  };

exports.updateById = function(req, res, next) {
    req.collection.updateById(req.params.id, {$set: req.body}, {safe: true, multi: false}, function(e, result){
      if (e) return next(e);
      res.send((result === 1) ? {msg:'success'} : {msg: 'error'});
    });
  };

exports.deleteById = exports.removeById = function(req, res, next) {
    req.collection.removeById(req.params.id, function(e, result){
      if (e) return next(e);
      res.send((result === 1)?{msg: 'success'} : {msg: 'error'});
    });
  };
