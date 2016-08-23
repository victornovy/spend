var express = require('express'),
    reuter = express.Router();

reuter.get('/', function(req, res) {
    res.status(200);
    res.send({'id': 123, 'name': 'Test'});
});

module.exports = reuter;