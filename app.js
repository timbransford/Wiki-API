require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json()); //?
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})





app.listen(process.env.PORT, function (err) {
  if(!err) {
    console.log("Server running on port "+process.env.PORT);
  }
})