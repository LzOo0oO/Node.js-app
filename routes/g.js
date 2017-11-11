var express = require('express');
var path = require('path');
var g = express.Router();



var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', (err) => {console.log(`mongoose ^^ ${err}`)});
db.on('open', () => {console.log("mongoose 数据库开启...")});
mongoose.connect("mongodb://192.168.0.135/stus", {useMongoClient: true});
var Schema = mongoose.Schema;
// var touZiSchema = new Schema({
//   title: String,
//   incomeNum: Number,
//   income: String,
//   year: Number,
//   yearType: String,
//   money: String,
//   star: Number,
//   program: Number,
//   mayMoney: String,
//   src: String
// });

// var WoYaoTouZi = mongoose.model("Three", touZiSchema);
// new addData({});
var options = {root: __dirname + "/../public"};








/* GET home page. */
g.get('/logon', function(req, res, next) {
  res.sendFile("html/G_deng.html", options);
});

g.get('/login', function(req, res, next) {
  res.sendFile("html/G_zhu.html", options);
});

g.post('/login', function(req, res, next) {
  // if (req.body.passwd == ???) {
  //   res.json({login: true, html: '/'});
  // } else {
  //   res.json({login: false});
  // };


  res.json({login: false});

});













module.exports = g;
