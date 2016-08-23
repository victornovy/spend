var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    res.send('get all spens');
});

router.get('/:_id', function(req, res) {
    res.send('get a specific spend by id');
});

router.post('/', function(req, res) {
    res.send('create a new spend');
});

router.put('/:_id', function(req, res) {
    res.send('update a spend');
});

router.delete('/:_id', function(req, res) {
    res.send('delete a spend');
});

module.exports = router;