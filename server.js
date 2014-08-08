var express = require('express');
var fs = require('fs');

var app = express();
var port = 8080;

app.use('/', express.static(__dirname + '/app'));

app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

app.listen(port, function() {
  console.log('listening localhost:' + port);
});
