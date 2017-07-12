var express = require('express');
var bodyParser = require('body-parser');

var app = module.exports = express();

app.use(express.static(__dirname + ''));
app.use(bodyParser.json());

var port = 3009;
app.listen(port, function() {
    console.log("listening on port " + port)
});
