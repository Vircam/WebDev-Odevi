var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var eng1Router = require('./routes/english1');
var eng2Router = require('./routes/english2');
var eng3Router = require('./routes/english3');
var mat1Router = require('./routes/mat1');
var mat2Router = require('./routes/mat2');
var mat3Router = require('./routes/mat3');
var fen1Router = require('./routes/fen1');
var fen2Router = require('./routes/fen2');
var fen3Router = require('./routes/fen3');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

app.use('/', indexRouter);
app.use('/eng1', eng1Router);
app.use('/eng2', eng2Router);
app.use('/eng3', eng3Router);
app.use('/mat1', mat1Router);
app.use('/mat2', mat2Router);
app.use('/mat3', mat3Router);
app.use('/fen1', fen1Router);
app.use('/fen2', fen2Router);
app.use('/fen3', fen3Router);

module.exports = app;
