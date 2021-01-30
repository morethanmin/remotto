if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

// node side
const path = require('path');

// pakage
const express = require("express");
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');

// routes
const articleRoutes = require('./routes/articles');

//express init
const app = express();
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//set middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

// app.use("/", (req, res) => {
//   res.render("home")
// });

app.use('/', articleRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});

