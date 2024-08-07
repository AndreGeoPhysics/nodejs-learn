var express = require('express');
var router = express.Router();
const path = require('path');
/* GET home page. */

router.use(express.static('views'));
router.use(express.static('public'));


router.get('/', function(req, res, next) {
    res.sendFile('index.html');
});

module.exports = router;
