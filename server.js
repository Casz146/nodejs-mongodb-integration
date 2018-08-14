// server.js
// load the things we need
var express = require('express');
var favicon = require('serve-favicon');
var app = express();

app.use(favicon(__dirname + '/favicon.ico'));

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views/pages/'))

// use res.render to load up an ejs view file

// index page 
app.get('/:page', function(req, res) {
    res.render('pages/'+req.params.page);
});

// about page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

var port_number = process.env.PORT || 8080;
app.listen(port_number);

console.log('8080 is the magic port');