var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index',{items:
  [['短期灵活','1-3个月期限','微收益-医美贷七百七十九期','7%+0.5%',80,'url(../images/short.png)','40','95px','70px','微收益-医美贷七百七十九期','6.5%',28],
  ['中期稳健','4-9个月期限','车帮主-广顺伟业七十五期','10%',102,'url(../images/medium.png)','20','86px','60px'],
  ['长期省心','10个月以上期限','微收益-医美贷七百六十二期','10.8%+0.4%',347,'url(../images/long.png)','49.08','50px','60px'],
  ['微转让','经常关注　会有惊喜','车帮主-万鑫八十四期','8.23%',59,'url(../images/resale.png)','3','70px','50px']],
                    one: "active", two: "", three: "", four: "", five: "", six: "", seven: ""},function(err,html){
    if (!err){
      console.log(html);
      res.type("text/html");
      res.send(html);
    }
  });
});

module.exports = router;
