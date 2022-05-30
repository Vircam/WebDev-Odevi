const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  console.log(req.session.userId);
  if(req.session.userId){
   return  res.render("index",{
      title: 'Registration Page',
      name: req.session.userName,
      email: '',
      password: ''
  });
 }
 res.redirect("/login");
});

router.post('/',function (req, res) {
    req.session.destroy()
    req.session.userId=null;
    res.redirect("/login");
})

module.exports = router;
