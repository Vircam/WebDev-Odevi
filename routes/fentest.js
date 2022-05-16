var express = require('express');
var router = express.Router();
var db = require('../database');
/* GET home page. */
router.get('/', function (req, res, next) {
  var sql = 'SELECT * FROM testler';
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('fen_bilgisi/fen_test_1', { title: 'Express', userData: data });
  });
});

module.exports = router;
