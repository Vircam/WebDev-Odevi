const employee = require('./employe');
const app = employee.express();
passport = require("passport");
LocalStrategy = require("passport-local");
passportLocalMongoose = require("passport-local-mongoose");
const client = require("./database");
const User = require("./models/user_model");
const MemoryStore = require("express-session/session/memory");


app.set("views", employee.path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(employee.logger('dev'));
app.use(employee.bodyParser.json());
app.use(employee.bodyParser.urlencoded({extended: false}));
app.use(employee.cookieParser());
app.use(employee.express.static(employee.path.join(__dirname, 'public')));


app.use(employee.session({
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
    store: new MemoryStore(),
    cookie: {maxAge: 30*60000}
}))
app.use(passport.initialize(undefined));
app.use(passport.session(undefined));
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.signIn(username,password,function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
));
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

app.use(employee.flash());


app.use('/', employee.signRouter);
app.use('/index', employee.indexRouter);
app.use('/register', employee.registerRouter);
app.use('/login', employee.loginRouter);
app.use('/eng1', employee.eng1Router);
app.use('/eng2', employee.eng2Router);
app.use('/eng3', employee.eng3Router);
app.use('/engtest', employee.engTestRouter);
app.use('/puan', employee.puanRouter);
app.use('/mat1', employee.mat1Router);
app.use('/mat2', employee.mat2Router);
app.use('/mat3', employee.mat3Router);
app.use('/mattest', employee.matTestRouter);
app.use('/fen1', employee.fen1Router);
app.use('/fen2', employee.fen2Router);
app.use('/fen3', employee.fen3Router);
app.use('/fentest', employee.fenTestRouter);

app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});




module.exports = app;



