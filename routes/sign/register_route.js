const express = require('express');
const passport = require("passport");
const User = require("../../models/user_model")
const router = express.Router();

// Showing register form
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
router.post("/", function (req, res) {
    var email = req.body.email
    var name = req.body.name
    var password = req.body.password
    User.createData(name,email, password, function (err, user) {
            if (err) {
                console.log(err);
                return res.render("sign/register");
            }
            passport.authenticate("local")(
                req, res, function () {
                    req.flash('success', 'You have logged in')
                    res.render("index");
                });
        });
});

module.exports = router;