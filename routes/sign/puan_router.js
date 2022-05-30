const express = require('express');
const puanData = require("../../models/answers_model");
const router = express.Router();
let matPuan = 0, fenPuan = 0, engPuan = 0;

router.get('/', function (req, res, next) {
    return res.render('sign/puan', {title: 'Express',eng:engPuan, fen:fenPuan, mat:matPuan});


});
router.post('/', function (req, res, next) {

    puanData.fetchData(
        '', function (value) {
           engPuan=calcExam(value, req, "0");
           fenPuan=calcExam(value, req, "1");
           matPuan=calcExam(value, req, "2");
            return res.redirect('puan');
        })
});

function calcExam(value,req,which) {
    let puan=0;
    value.forEach(function (data) {
        if(data.test_catid==which){
            req.body.user_test.forEach(function (request) {
                if(request.test_catid==which){
                    Object.keys(request.test_answers).forEach(function (key) {
                        if(request.test_answers[key]==data[key]){
                             puan+=10;
                        }
                    })
                }
            })
        }
    })
    return puan;
}

module.exports = router;
