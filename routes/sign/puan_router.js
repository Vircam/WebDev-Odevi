const express = require('express');
const puanData = require("../../models/answers_model");
const userData = require("../../models/user_model");
const router = express.Router();
let matPuan = 0, fenPuan = 0, engPuan = 0;

router.get('/', function (req, res, next) {
    if(req.session.userId){
        return res.render('sign/puan', {
            title: 'Express',
            name: req.session.userName,
            eng: engPuan,
            fen: fenPuan,
            mat: matPuan
        });
    }
    res.redirect("/login");

});
router.post('/', function (req, res, next) {
    puanData.fetchData(
        '', function (value) {
            userData.fetchData(req.session.userId,async function (reqValue) {
                engPuan = await calcExam(value, reqValue, "0");
                fenPuan = await calcExam(value, reqValue, "1");
                matPuan = await  calcExam(value, reqValue, "2");
                return res.redirect('puan');
            })
        })
});

async  function calcExam(value, req, which) {
    let puan = 0;
    value.forEach(function (data) {
        if (data.test_catid == which) {
            req.user_test.forEach(function (request) {
                if (request.test_catid == which) {
                    Object.keys(request.test_answers).forEach(function (key) {
                        if (request.test_answers[key] == data[key]) {
                            puan += 10;
                        }
                    })
                }
            })
        }
    })
    return puan;
}

module.exports = router;
