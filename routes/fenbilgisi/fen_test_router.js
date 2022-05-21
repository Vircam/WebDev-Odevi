var express = require('express');
var fenTestData = require('../../models/fen_model')
var userData = require('../../models/user_model')
var router = express.Router();
router.get('/', async function (req, res, next) {
    fenTestData.fetchData(function (data) {
        res.render('fen_bilgisi/fen_test', {title: 'Express', userData: data});
    })
});

router.post('/', function (req, res, next) {
    console.log(req.body)
    userData.updateData(
        req.body.user_id,
        req.body.test_sure,
        req.body.soru1,
        req.body.soru2,
        req.body.soru3,
        req.body.soru4,
        req.body.soru5,
        req.body.soru6,
        req.body.soru7,
        req.body.soru8,
        req.body.soru9,
        req.body.soru10
        )
});

module.exports = router;
