const express = require('express');
const passport = require("passport");
const router = express.Router();

//Showing login form
router.get("/", function (req, res) {
    res.render('sign/login', {
        title: 'Registration Page',
        name: '',
        email: '',
        password: ''
    })
});
//Handling user login
router.post("/login", passport.authenticate("local", {
    successRedirect: "sign/home",
    failureRedirect: "sign/login"
}), function (req, res) {

});

module.exports = router;