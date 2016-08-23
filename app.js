var express = require('express'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlEncoded( {extended: true} ));

app.get('/', function(req, res) {
    res.status(200);
    res.send('Hello world');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('example app listening at http://%s:%s', host, port);
});
