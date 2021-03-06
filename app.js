var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var lz = require('./routes/lz');
var q = require('./routes/q');
var h = require('./routes/h');
var z = require('./routes/z');
var g = require('./routes/g');
var l = require('./routes/l');


var app = express();

// app.listen(8000, () => {
//   console.log("监听 8000...");
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'icons', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/head', function(req, res) {
  // console.log(req);
  res.sendFile('html/G_deng.html');
  // res.render('lz_foot');
});

app.get('/con', function(req, res) {
  // console.log(req);
  res.render('lz_connect', {list: [1, 2, 3, 4 ,5, 6, 7, 8, 9]});
});
app.use('/', index);
app.use('/lz', lz);
app.use('/q', q);
app.use('/h', h);
app.use('/z', z);
app.use('/g', g);
app.use('/l', l);

app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
