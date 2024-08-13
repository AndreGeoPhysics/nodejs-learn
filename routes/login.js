var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/', function(req, res, next) {
    console.log('ok')
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

module.exports = router;