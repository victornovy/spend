var express = require('express'),
    router = express.Router();

router.use('/', express.static(__dirname + '/../frontend'));

router.use('/spends', require('./spends.js'));

module.exports = router;