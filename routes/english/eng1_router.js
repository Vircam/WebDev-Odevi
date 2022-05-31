const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
  if(req.session.userId){
    return res.render('english/eng1', {title: 'Express', name: req.session.userName});
  }
  res.redirect("/login");
});

module.exports = router;
