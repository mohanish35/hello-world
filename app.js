var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/my-app/dist/index.html');
});

app.listen(process.env.PORT || 8080);