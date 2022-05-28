const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index_router');
const signRouter = require('./routes/sign/home_router');
const loginRouter = require('./routes/sign/login_route');
const registerRouter = require('./routes/sign/register_route');
const eng1Router = require('./routes/english/eng1');
const eng2Router = require('./routes/english/eng2');
const eng3Router = require('./routes/english/eng3');
const engTestRouter = require('./routes/english/engtest');
const mat1Router = require('./routes/matematik/mat1');
const mat2Router = require('./routes/matematik/mat2');
const mat3Router = require('./routes/matematik/mat3');
const matTestRouter = require('./routes/matematik/mat_test');
const fen1Router = require('./routes/fenbilgisi/fen1');
const fen2Router = require('./routes/fenbilgisi/fen2');
const fen3Router = require('./routes/fenbilgisi/fen3');
const fenTestRouter = require('./routes/fenbilgisi/fen_test_router');

module.exports = {
    express,
    path,
    signRouter,
    registerRouter,
    cookieParser,
    flash,
    session,
    bodyParser,
    logger,
    loginRouter,
    indexRouter,
    eng1Router,
    eng2Router,
    eng3Router,
    engTestRouter,
    mat1Router,
    mat2Router,
    mat3Router,
    matTestRouter,
    fen1Router,
    fen2Router,
    fen3Router,
    fenTestRouter
};
