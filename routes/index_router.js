const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  console.log(req.session.userId);
  if(req.session.userId){
   return  res.render("index",{
      title: 'Registration Page',
      name: '',
      email: '',
      password: ''
  });
 }
 res.redirect("/login");
});

module.exports = router;
