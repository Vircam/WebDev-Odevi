const express = require('express');
const passport = require("passport");
const router = express.Router();
const User = require("../../models/user_model")

//Showing login form
router.get("/", function (req, res) {
    if(req.session.userId){
       return res.redirect("/index");
    }
    res.render('sign/login', {
        title: 'Registration Page',
        name: '',
        email: '',
        password: ''
    })
});
//Handling user login
router.post("/", function (req, res) {
    var email = req.body.email
    var password = req.body.password
    console.log(email, password)
    User.signIn(email, password, function (user) {
        if (!user) {
            console.log(user);
            return   res.render('sign/login', {
                title: 'Registration Page',
                name: '',
                email: '',
                password: ''
            })
        }

        if(user.user_mail===email && user.user_pass===password){
                req.session.userId = user._id;
                console.log(req.session.userId);
                res.redirect("/index");
            }
        });
});

module.exports = router;