const express = require('express');
const passport = require("passport");
const User = require("../../models/user_model")
const router = express.Router();

// Showing register form
router.get("/", function (req, res) {
    res.render('sign/register', {
        title: 'Registration Page',
        name: '',
        email: '',
        password: ''
    })
});
router.post("/register", function (req, res) {
    var email = req.body.email
    var password = req.body.password
    User.register(new User({ email: email }),
        password, function (err, user) {
            if (err) {
                console.log(err);
                return res.render("sign/register");
            }
            passport.authenticate("local")(
                req, res, function () {
                    req.flash('success', 'You have logged in')
                    res.render("home");
                });
        });
});

module.exports = router;