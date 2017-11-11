var express = require('express');

var l = express.Router();



/* GET home page. */


l.get('/about/gltd',function(req,res){
  res.render('l-gy-gltd')
});
l.get('/about',function(req,res){
  res.render('l-gy')
});
l.get('/about/dstd',function(req,res){
  res.render('l-gy-dstd')
});
l.get('/about/fzlc',function(req,res){
  res.render('l-gy-fzlc')
});
l.get('/about/hzhb',function(req,res){
  res.render('l-gy-hzhb')
});
l.get('/about/yqlj',function(req,res){
  res.render('l-gy-yqlj')
});
l.get('/about/lxwm',function(req,res){
  res.render('l-gy-lxwm')
});








module.exports = l;
