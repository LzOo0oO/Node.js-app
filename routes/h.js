var express = require('express');
var h = express.Router();


var head_u_l = {one: "", two: "", three: "", four: "active", five: "", six: ""};
/* GET home page. */
h.get('/01', function(req, res, next) {
  res.render('h_xs-01', head_u_l);
});

h.get('/02', function(req, res, next) {
  res.render('h_xs-02', head_u_l);
});

h.get('/03', function(req, res, next) {
  res.render('h_xs-03', head_u_l);
});

h.get('/04', function(req, res, next) {
  res.render('h_xs-04', head_u_l);
});

h.get('/05', function(req, res, next) {
  res.render('h_xs-05', head_u_l);
});

h.get('/06', function(req, res, next) {
  res.render('h_xs-06', head_u_l);
});













module.exports = h;
