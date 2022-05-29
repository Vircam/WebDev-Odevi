const express = require('express');
const passport = require("passport");
const User = require("../../models/user_model")
const router = express.Router();

// Showing register form
router.get("/", function (req, res) {
    if (req.session.userId) {
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
    const email = req.body.email, name = req.body.name, password = req.body.password;
    User.createData(email, name, password, function (err, user) {
        if (!user) {
            console.log("My Error:"+err.toString());
            return res.render('sign/register', {
                title: 'Registration Page',
                name: '',
                email: '',
                password: ''
            })
        }
        req.session.userId = user._id;
        if (req.session.userId) {
            return res.redirect("/index");
        }
    });
});

module.exports = router;