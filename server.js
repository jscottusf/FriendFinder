const express = require("express");
const path = require("path");
const bodyParser = require('body-parser') // middleware for parsing the body of a request
const app = express();
const PORT = process.env.PORT || 3000;
let friendsList = require("./app/data/friends")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/friends", function(req, res) {
    return res.json(friendsList);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });