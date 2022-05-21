const express = require('express');
const userModel = require("../models/user_model");
const router = express.Router();

router.get('/index',isLoggedIn, function(req, res, next) {
  userModel.fetchData("huzeyfedinc@gmail.com","40045053",function (data) {
    console.log('database is connected successfully: '+data);
    res.render('index', { title: data, userData:data });
  })
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

module.exports = router;
