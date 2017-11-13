var express = require('express');
var h = express.Router();



/* GET home page. */
h.get('/01', function(req, res, next) {
  res.render('h_xs-01', {one: "", two: "", three: "", four: "active", five: "", six: "", seven: ""});
});

h.get('/02', function(req, res, next) {
  res.render('h_xs-02', {one: "", two: "", three: "", four: "active", five: "", six: "", seven: ""});
});

h.get('/03', function(req, res, next) {
  res.render('h_xs-03', {one: "", two: "", three: "", four: "active", five: "", six: "", seven: ""});
});

h.get('/04', function(req, res, next) {
  res.render('h_xs-04', {one: "", two: "", three: "", four: "active", five: "", six: "", seven: ""});
});

h.get('/05', function(req, res, next) {
  res.render('h_xs-05', {one: "", two: "", three: "", four: "active", five: "", six: "", seven: ""});
});

h.get('/06', function(req, res, next) {
  res.render('h_xs-06', {one: "", two: "", three: "", four: "active", five: "", six: "", seven: ""});
});













module.exports = h;
