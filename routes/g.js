var express = require('express');
var path = require('path');
var g = express.Router();

var options = {root: __dirname + "/../public"};

/* GET home page. */
g.get('/logon', function(req, res, next) {
  res.sendFile("html/G_deng.html", options);
});

g.get('/login', function(req, res, next) {
  res.sendFile("html/G_zhu.html", options);
});

g.post('/login', function(req, res, next) {
  res.render("index");
});













module.exports = g;
