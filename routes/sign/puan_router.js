const express = require('express');
const puanData = require("../../models/answers_model");
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('sign/puan', {title: 'Express',data:req.body});

});
router.post('/', function (req, res, next) {
    const matPuan = 0, fenPuan = 0, engPuan = 0;
    console.log(req.body.user_test)
    puanData.fetchData(
        '', function (value) {
            value.forEach(function (data) {
                console.log(data.test_catid)
            })
           // res.render('sign/puan', {title: 'Express',data:req.body});
        })
});

module.exports = router;
