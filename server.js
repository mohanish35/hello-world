var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hello man');
});

app.listen(process.env.PORT || 3000)
