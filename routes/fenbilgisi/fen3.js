const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('fen_bilgisi/fen_3', { title: 'Express' });
});

module.exports = router;