var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Location of static assets
app.use(express.static(path.join(__dirname, '/client/build')));

// Routes
//app.use('/', indexRouter);
app.use('/users', usersRouter);

// Respond with index.html for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build.index.html'));
});

module.exports = app;
