if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

// node side
const path = require('path');

// pakage
const express = require("express");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const User = require('./models/user');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const methodOverride = require('method-override');
const MongoDBStore = require('connect-mongo')(session);

// routes
const appRoutes = require('./routes/apps');
const reviewRoutes = require('./routes/reviews');
const userRoutes = require('./routes/users');
const articleRoutes = require('./routes/articles');

//mongo

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/remotto'; //process.env.DB_URL;
//console.log(dbUrl)
//mongodb://localhost:27017/yelp-camp
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

 const db = mongoose.connection;
 db.on("error", console.error.bind(console, "connection error:"));
 db.once("open", () => {
     console.log("Database connected");
 });

//mongosession

const secret = process.env.SECRET || 'thisshouldbeabettersecret!'

const store = new MongoDBStore({
    url: dbUrl,
    secret,
    touchAfter: 24 * 60 * 60 //24hours
});

const sessionConfig = {
    store,
    name: 'session',
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}


//express init
const app = express();
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//set middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) => {
     //if(req.user)
    res.locals.currentUser = req.user;
    //  console.log(res.locals.currentUser)
    next();
})

app.use('/', userRoutes);
app.use('/', appRoutes);
app.use('/', articleRoutes);
app.use('/:id/reviews', reviewRoutes);



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});



