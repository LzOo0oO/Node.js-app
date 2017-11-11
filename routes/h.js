var express = require('express');
var h = express.Router();



/* GET home page. */
h.get('/01', function(req, res, next) {
  res.render('h_xs-01');
});

h.get('/02', function(req, res, next) {
  res.render('h_xs-02');
});

h.get('/03', function(req, res, next) {
  res.render('h_xs-03');
});

h.get('/04', function(req, res, next) {
  res.render('h_xs-04');
});













module.exports = h;
