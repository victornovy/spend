var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    res.status(200);
    res.send({'id': 123, 'name': 'Test'});
});

router.use('/spends', require('./spends.js'));

module.exports = router;