const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
        res.render('matematik/mat2', { title: 'Express' });
});

module.exports = router;
