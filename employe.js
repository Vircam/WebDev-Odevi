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
const puanRouter = require('./routes/sign/puan_router');
const eng1Router = require('./routes/english/eng1_router');
const eng2Router = require('./routes/english/eng2_router');
const eng3Router = require('./routes/english/eng3_router');
const engTestRouter = require('./routes/english/engtest_router');
const mat1Router = require('./routes/matematik/mat1_router');
const mat2Router = require('./routes/matematik/mat2_router');
const mat3Router = require('./routes/matematik/mat3_router');
const matTestRouter = require('./routes/matematik/mattest_router');
const fen1Router = require('./routes/fenbilgisi/fen1_router');
const fen2Router = require('./routes/fenbilgisi/fen2_router');
const fen3Router = require('./routes/fenbilgisi/fen3_router');
const fenTestRouter = require('./routes/fenbilgisi/fentest_router');

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
    puanRouter,
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
