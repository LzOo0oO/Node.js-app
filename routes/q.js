var express = require('express');
var q = express.Router();
var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', (err) => {console.log(`mongoose ^^ ${err}`)});
db.on('open', () => {console.log("mongoose 数据库开启...")});
mongoose.connect("mongodb://192.168.0.135/stus", {useMongoClient: true});
var Schema = mongoose.Schema;
var xinWenSchema = new Schema({
  title: String,
  incomeNum: String,
  income: String
});

// var XinWen = mongoose.model("XinWen", xinWenSchema);
// new XinWen({
//   title:"【微动态】《搜狐财经》《国际在线》等多家媒体报道：股权质押或成互联网金融资产端新走向",
//   incomeNum: 2016-10-17,
//   income:"2016年互联网金融真正进入监管元年，最严监管的强势落地让互联网金融行业加速进入洗牌期。“13条禁令”更缩小了平台的业务空间，使本不充裕的优质资产变的更加匮乏。在监管元年以及优质资产“资产荒”双重压力"
// }).save((err, data) => {
//   if (!err) {
//     console.log(`mongoose ${data} 数据添加成功.`);
//   } else {
//     console.log(err);
//   };
// });


var head_li = {one: "", two: "", three: "", four: "", five: "active", six: ""};



/* GET home page. */
q.get('/', function(req, res, next) {
  res.status(200);
  WoYaoTouZi.find( {}, null, function(err, docs) {
    if (!err) {
      if (docs[0]) {
        if (docs[0].passwd === req.body.passwd) {
          console.log(docs);
          res.render('q_xw', {list: docs, one: "", two: "", three: "", four: "", five: "active", six: ""});
        } else {
          res.render('index', head_li);
        };
      } else {
        res.render('index', head_li);
      };
    } else {
      res.render('index', head_li);
    };
  });
});














module.exports = q;
