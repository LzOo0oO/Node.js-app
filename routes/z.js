var express = require('express');
var z = express.Router();
var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', (err) => {console.log(`mongoose ^^ ${err}`)});
db.on('open', () => {console.log("mongoose 数据库开启...")});
mongoose.connect("mongodb://192.168.0.135/stus", {useMongoClient: true});
var Schema = mongoose.Schema;
var ShouYeSchema = new Schema({
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

var ShowYe = mongoose.model("ShouYe", ShouYeSchema);
// new ShowYe({});

/* GET home page. */
z.get('/', function(req, res, next) {
  res.render('z_aq', {one: "", two: "", three: "active", four: "", five: "", six: ""});
});














module.exports = z;
