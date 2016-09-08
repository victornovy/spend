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

//routes
app.use('/', require('./routes'));

//error handlig
app.use(function(req, res, next) {
    var error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use(function(error, req, res, next) {
    console.log(`### ERRO ### ${new Date()} \n ${error.stack}`);
    res.status(error.status || 500).json({ error: error.message });
});

//server listener
module.exports = app;