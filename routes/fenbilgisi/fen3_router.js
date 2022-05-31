const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  if(req.session.userId){
   return res.render('fen_bilgisi/fen_3', {title: 'Express', name: req.session.userName});
  }
  else {
      res.redirect("/login");
  }
});

module.exports = router;
