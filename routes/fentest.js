var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('fen_bilgisi/fen_test_1', { title: 'Express' });
});

module.exports = router;
