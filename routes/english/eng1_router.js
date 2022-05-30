const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
  res.render('english/eng1', { title: 'Express',name: req.session.userName });
});

module.exports = router;
