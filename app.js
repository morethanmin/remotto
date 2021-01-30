const express = require("express");
const path = require('path');

const app = express();

app.use("/", (req, res) => {
  res.send("hello world!");
});

const port = process.env.PORT || 3000;


console.log(__dirname)

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
