var express = require('express');
var z = express.Router();



/* GET home page. */
z.get('/', function(req, res, next) {
  res.render('z_aq', {one: "", two: "", three: "active", four: "", five: "", six: ""});
});














module.exports = z;
