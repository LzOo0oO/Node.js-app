var express = require('express');
var q = express.Router();
var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', (err) => {console.log(`mongoose ^^ ${err}`)});
db.on('open', () => {console.log("mongoose 数据库开启...")});
mongoose.connect("mongodb://192.168.0.135/stus", {useMongoClient: true});
var Schema = mongoose.Schema;
var xinWenSchema = new Schema({
  type: String,
  title: String,
  incomeNum: String,
  income: String
});

var XinWen = mongoose.model("XinWen", xinWenSchema);


new XinWen({
  type: "专题",
  title:"【微公告】关于车帮主及金房宝产品提前还款的说明",
  incomeNum: "2017-10-28",
  income:"产品星级是上架资产风险定价的核心要素。希望广大投资者时刻把握投资风险。"
}).save((err, data) => {
  if (!err) {
    console.log(`mongoose ${data} 数据添加成功.`);
  } else {
    console.log(err);
  };
});


var head_li = {one: "", two: "", three: "", four: "", five: "active", six: ""};


var obj1 = {};
var obj2 = {};
var obj3 = {};
var obj4 = {};
var obj5 = {};

/* GET home page. */
q.get('/', function(req, res, next) {
  res.status(200);


  XinWen.find({}, null, function(err, docs) {
    if (!err) {
      if (docs[0]) {
        // res.render('q_xw', {list: docs, one: "", two: "", three: "", four: "", five: "active", six: ""});
        obj1 = docs;
      } else {
        res.render('index', head_li);
      };
    } else {
      res.render('index', head_li);
    };
  }).sort({title: 1});

  XinWen.find({type: "新闻"}, null, function(err, docs) {
    if (!err) {
      if (docs[0]) {
        // res.render('q_xw', {list: docs, one: "", two: "", three: "", four: "", five: "active", six: ""});
        obj2 = docs;
      } else {
        res.render('index', head_li);
      };
    } else {
      res.render('index', head_li);
    };
  }).sort({title: 1});

  XinWen.find({type:"头条"}, null, function(err, docs) {
    if (!err) {
      if (docs[0]) {
        // res.render('q_xw', {list: docs, one: "", two: "", three: "", four: "", five: "active", six: ""});
        obj3 = docs;
      } else {
        res.render('index', head_li);
      };
    } else {
      res.render('index', head_li);
    };
  });

  XinWen.find({type:"资讯"}, null, function(err, docs) {
    if (!err) {
      if (docs[0]) {
        // res.render('q_xw', {list: docs, one: "", two: "", three: "", four: "", five: "active", six: ""});
        obj4 = docs;
      } else {
        res.render('index', head_li);
      };
    } else {
      res.render('index', head_li);
    };
  }).sort({title: 1});
  XinWen.find( {type: "专题"}, null, function(err, docs) {
    if (!err) {
      if (docs[0]) {
        res.render('q_xw', {list1: obj1, list2: obj2, list3: obj3 ,list4: obj4, list5: obj5, one: "", two: "", three: "", four: "", five: "active", six: ""});
        obj5 = docs;
      } else {
        res.render('index', head_li);
      };
    } else {
      res.render('index', head_li);
    };
  }).sort({title: 1});
});














module.exports = q;
