const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('matematik/mat1', { title: 'Express',name: req.session.userName });
});

module.exports = router;
