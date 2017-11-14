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

var head_li = {one: "", two: "active", three: "", four: "", five: "", six: ""};
/* GET home page. */
// lz.get('/', function(req, res, next) {
//   res.render('lz_connect', {obj, one: "", two: "active", three: "", four: "", five: "", six: "", seven: ""});
// });

lz.get('/head', function(req, res, next) {
  res.render('lz_connect', obj);
});

lz.get('/', function(req, res, next) {
  res.status(200);
  WoYaoTouZi.find({}, null, function(err, docs) {
    if (!err) {
      if (docs[0]) {
        console.log(docs.length);
        res.render('lz_connect', {pageLength: docs.length,list: docs, one: "", two: "active", three: "", four: "", five: "", six: ""});
      } else {
        res.render('index', head_li);
      };
    } else {
      res.render('index', head_li);
    };
  }).limit(3);
});

lz.post('/', function (req, res, next) {
  console.log(req.body.numOne);

  var objSort = {}, objData = {};
  if (req.body.type == "income") {
    objSort = {incomeNum: req.body.sort};
  } else if (req.body.type == "year") {
    objSort = {year: req.body.sort};
  } else if (req.body.type == "type") {
    objSort = {title: req.body.sort};
  } else if (req.body.type == "star") {
    objSort = {star: req.body.sort};
  } else if (req.body.type == "all") {
    objSort = {_id: req.body.sort};
  };

  objData = {year: {$gte: req.body.min1,$lte: req.body.max1}, incomeNum: {$gte: req.body.min2,$lte: req.body.max2}, title: req.body.name};
  objData = req.body.name === "" ? {year: {$gte: req.body.min1,$lte: req.body.max1}, incomeNum: {$gte: req.body.min2,$lte: req.body.max2}} : objData;
  console.log(objData, objSort);

  var pageLength = 0;
  WoYaoTouZi.find(objData, null, function(err, docs) {
    pageLength = docs.length;
    WoYaoTouZi.update({},{$set: {pageLength: pageLength}});
  });


  WoYaoTouZi.find(objData, null, function(err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json({find: false});
    };
  // }).sort(objSort);
  }).sort(objSort).skip(+ req.body.numOne).limit(3);
});


















module.exports = lz;
