var express = require('express');
var path = require('path');
var g = express.Router();



var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', (err) => {console.log(`mongoose ^^ ${err}`)});
db.on('open', () => {console.log("mongoose 数据库开启...")});
mongoose.connect("mongodb://192.168.0.135/stus", {useMongoClient: true});
var Schema = mongoose.Schema;
var UsersData = new Schema({
  user: String,
  passwd: String,
});

var AddCommonUser = mongoose.model("UsersH5", UsersData);
// new AddCommonUser({user: "waa", passwd: "123"}).save(function(err, data) {
//   if (!err) {
//     console.log(`Mongoose 数据库: ${data.user} ---数据添加成功。。。`);
//     console.log(data);
//   } else {
//     console.log(err);
//   };
// });


var options = {root: __dirname + "/../public"};








/* login 注册。。。logon 登入 */
g.get('/logon', function(req, res, next) {
  res.sendFile("html/G_deng.html", options);
});

g.post('/logon', function(req, res, next) {
  res.status(200);
  AddCommonUser.find({user: req.body.user}, null, function(err, docs) {

    if (!err) {
      if (docs[0]) {
        if (docs[0].passwd === req.body.passwd) {
          console.log(docs[0]);
          console.log(req.body);
          res.json({login: true, url: '/'});
        } else {
          res.json({login: false});
        };
      } else {
        res.json({login: false});
      };
    } else {
      res.json({login: false});
    };
  });
});


g.get('/login', function(req, res, next) {
  res.sendFile("html/G_zhu.html", options);
});

g.post('/login', function(req, res, next) {
  console.log(req.body);
  res.status(200);
  new AddCommonUser({user: req.body.user, passwd: req.body.passwd}).save(function(err, data) {

    console.log("err=====", err);
    if (!err) {
      console.log("asaS");
      console.log(`Mongoose 数据库: ${data.user} ---数据添加成功。。。`);
      console.log(data);
      res.json({login: true, url: '/g/logon'});
    } else {
      res.json({login: false});
    };
  });

});













module.exports = g;
