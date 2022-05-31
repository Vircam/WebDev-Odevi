const express = require('express');
const router = express.Router();
var userData = require('../../models/user_model')
/* GET home page. */
router.get('/', function (req, res, next) {
    if(req.session.userId){
        userData.fetchData(req.session.userId, function (data) {
            console.log(data)
            return res.render('english/engtest', {title: 'Express', name: req.session.userName, sorular: data});
        })
    }
    res.redirect("/login");
});
router.post('/', function (req, res) {
    userData.updateData(
        req.session.userId, {
            id: req.body.id,
            test_sure: req.body.test_sure,
            test_catid: "0",
            is_test_done: req.body.isDone,
            test_baslangic: req.body.baslangic,
            test_bitis: req.body.bitis,
            test_answers: {
                soru1: req.body.soru1,
                soru2: req.body.soru2,
                soru3: req.body.soru3,
                soru4: req.body.soru4,
                soru5: req.body.soru5,
                soru6: req.body.soru6,
                soru7: req.body.soru7,
                soru8: req.body.soru8,
                soru9: req.body.soru9,
                soru10: req.body.soru10
            }
        }
    )
});


module.exports = router;
