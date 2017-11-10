var express = require('express');
var lz = express.Router();

/* GET home page. */
lz.get('/', function(req, res, next) {
  res.render('lz_connect', {
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
  });
});
























module.exports = lz;
