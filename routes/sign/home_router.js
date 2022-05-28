const express = require('express');
const router = express.Router();

router.get("/", function (req, res) {
    if(req.session.userId){
        return res.redirect("/index");
     }
    res.render('sign/register', {
        title: 'Registration Page',
        name: '',
        email: '',
        password: ''
    })
});

module.exports = router;
