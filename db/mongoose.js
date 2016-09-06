var mongoose = require('mongoose'),
    config = require('config'),
    debug = require('debug')('spend:db');

function _connection() {
    var username = config.get('mongo.username'),
        password = config.get('mongo.password'),
        server   = config.get('mongo.server'),
        port     = config.get('mongo.port'),
        databse  = config.get('mongo.database'),
        auth     = !!username ? `${username} : ${password}` : '';

    return `mongodb://${auth}${server}:${port}/${databse}`;
}

mongoose.connect(_connection());

var db = mongoose.connection;

db.on('error', function(err) {
    debug(err);
});

db.once('open', function(callback) {
    debug('Connected to mongodb');
});

module.exports = mongoose;