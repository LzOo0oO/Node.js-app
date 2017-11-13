var express = require('express');

var l = express.Router();



/* GET home page. */
var head_li = {one: "", two: "", three: "", four: "", five: "", six: "active"};

l.get('/',function(req,res){
  res.render('l-gy', head_li);
});
l.get('/gsjj',function(req,res){
  res.render('l-gy', head_li);
});
l.get('/gltd',function(req,res){
  res.render('l-gy-gltd', head_li);
});
l.get('/dstd',function(req,res){
  res.render('l-gy-dstd', head_li);
});
l.get('/fzlc',function(req,res){
  res.render('l-gy-fzlc', head_li);
});
l.get('/hzhb',function(req,res){
  res.render('l-gy-hzhb', head_li);
});
l.get('/yqlj',function(req,res){
  res.render('l-gy-yqlj', head_li);
});
l.get('/lxwm',function(req,res){
  res.render('l-gy-lxwm', head_li);
});








module.exports = l;
