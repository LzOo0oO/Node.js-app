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
