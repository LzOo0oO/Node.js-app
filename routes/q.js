var express = require('express');
var q = express.Router();



/* GET home page. */
q.get('/', function(req, res, next) {
  res.render('q_xw', {one: "", two: "", three: "", four: "", five: "active", six: ""});
});














module.exports = q;
