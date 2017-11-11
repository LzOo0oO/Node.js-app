var express = require('express');
var lz = express.Router();
var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', (err) => {console.log(`mongoose ^^ ${err}`)});
db.on('open', () => {console.log("mongoose 数据库开启...")});
mongoose.connect("mongodb://192.168.0.135/stus", {useMongoClient: true});
var Schema = mongoose.Schema;
var touZiSchema = new Schema({
  title: String,
  incomeNum: Number,
  income: String,
  year: Number,
  yearType: String,
  money: String,
  star: Number,
  program: Number,
  mayMoney: String,
  src: String
});

var WoYaoTouZi = mongoose.model("Three", touZiSchema);
// 添加数据。。。。

// new WoYaoTouZi({
//   title: "这不是真的啊",
//   incomeNum: 99,
//   income: "% + 99%",
//   year: 365,
//   yearType: "0.0001%",
//   money: "12万元",
//   star: 30,
//   program: 886,
//   mayMoney: "666万元",
//   src: '/lz'
// }).save((err, data) => {console.log(err, data)});


var obj = {
  list: [1, 2, 3],
  title: "什么鬼",
  incomeNum: 11,
  income: "% + 5%",
  year: 365,
  yearType: "本息全还",
  money: "12万元",
  star: 60,
  program: 86,
  mayMoney: "60万元",
  src: '/lz'
};


/* GET home page. */
lz.get('/', function(req, res, next) {
  res.render('lz_connect', obj);
});

lz.get('/head', function(req, res, next) {
  res.render('lz_connect', obj);
});























module.exports = lz;
