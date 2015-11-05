var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require("request");

var routes = require('./routes/index');
var users = require('./routes/users');
var apis = require('./routes/apis');

var app = express();

app.locals.apiCache = {};
var apiCacheTimeout = 900000; //15 minutes
var lastRequestTime = new Date();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));

app.use('/', routes);
app.use('/users', users);

// route to proxy and cache calls to content api
app.get('/api/content/:args', function(req, res){
  var query = apis.routes.content + req.params.args;
  res.send(returnApiContent(query));
});

// route to proxy and cache calls to Flickr api
app.get('/api/flickr/:args', function(req, res){
  var query = apis.routes.flickr + '?api_key=' + apis.keys.flickr.api_key + req.params.args;
  res.send(returnApiContent(query));
});

// everything else is handled by the Angular routing
app.get('*', function(req, res){
  res.sendfile('./app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var returnApiContent = function(query) {

  var requestTime = new Date();

  if(requestTime - app.locals.lastRequestTime > app.locals.apiCacheTimeout) { //If sufficient time has passed, make fresh api request
    console.log('new api call');
    app.locals.lastRequestTime = requestTime;
    request(query, function(error, response, body) {
      //add returned data to cache then return data
      app.locals.apiCache[query] = body;
      return body;
    });
  } else {
    //check for cached version first
    if(app.locals.apiCache.hasOwnProperty(query) && app.locals.apiCache[query].length){
      console.log('cached api call');
      return app.locals.apiCache[query];
    } else {
      request(query, function(error, response, body) {
        //add returned data to cache then return data
        console.log('no cache - new api call');
        app.locals.apiCache[query] = body;
        return body;
      });
    }
  }
};

module.exports = app;
