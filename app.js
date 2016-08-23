var express = require('express'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    app = express();

app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

app.get('/', function(req, res) {
    res.status(200);
    res.send({'id': 123, 'name': 'Test'});
});

app.use(function(req, res, next) {
    var error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use(function(error, req, res, next) {
    console.log(error.stack);
    res.status(error.status || 500).json({ error: error.message });
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('example app listening at http://%s:%s', host, port);
});
