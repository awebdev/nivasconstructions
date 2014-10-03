var express = require('express');
var bodyParser = require('body-parser');
var DB = require('./DB.js');
var fs = require('fs');
var request = require('request');

var app = express();
var port = 8080;

/*
    DATABASE OPERATIONS
*/
app.use(bodyParser());
app.param('collectionName', DB.useCollection);
app.get('/api/:collectionName', DB.getCollection);
app.post('/api/:collectionName', DB.insertCollection);
app.get('/api/:collectionName/:id', DB.findById);
app.put('/api/:collectionName/:id', DB.updateById);
app.delete('/api/:collectionName/:id', DB.removeById);


/*
  LOG Service
*/
app.post('/log', function(req, res, next) {
  var data = new Date() + ':' + JSON.stringify(req.body) + '\n';
  fs.appendFile("errorlog", data, function(err) {
    if(err) {
      console.log(err);
      res.send(err);
    } else {
      res.send('Success');
    }
  });
});

/*
  Handle Crawler requests
    Ref: http://www.ng-newsletter.com/posts/serious-angular-seo.html
*/
app.use(function(req, res, next) {
  var fragment = req.query._escaped_fragment_;

  // If there is no fragment in the query params
  // then we're not serving a crawler
  if (!fragment) return next();

  // If the fragment is empty, serve the
  // index page
  if (fragment === "" || fragment === "/")
    fragment = "/index.html";

  // If fragment does not start with '/'
  // prepend it to our fragment
  if (fragment.charAt(0) !== "/")
    fragment = '/' + fragment;

  // If fragment does not end with '.html'
  // append it to the fragment
  if (fragment.indexOf('.html') == -1)
    fragment += ".html";

  // Serve the static html snapshot
  try {
    var file = __dirname + "/snapshots" + fragment;
    res.sendFile(file);
  } catch (err) {
    res.send(404);
  }
});

// Serve App
app.use('/', express.static(__dirname + '/app'));

// handle unknown paths
app.use(function(req, res, next){
  // log error
  var url = 'http://' + req.headers.host + '/log';
  // data has to be in form
  var data = { form: {error: '404', url: req.url} };
  request.post(url, data);

  // send status and render message
  res.status(404);
  res.sendFile(__dirname + '/app/404.html');
});

app.listen(port, function() {
  console.log('listening localhost:' + port);
});
