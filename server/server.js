var express = require('express');
var app = express();
var bodyparser = require('body-parser')
var port = 5000
var bodyParser = require ('body-parser')

app.use(bodyParser.json());

app.use(express.static('server/public'));



app.listen(port, function(){
    console.log('listening on port', port);  
});