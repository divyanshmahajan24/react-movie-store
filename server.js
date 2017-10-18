var express = require('express');
var app = express();
var path = require('path');
var port = 3031;


app.use('/dist/', express.static(__dirname + '/dist/'));
app.use('/public/img', express.static(__dirname + '/src/public/static/img'));
app.use('/public/font', express.static(__dirname + '/src/public/static/font'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(port, function () {
  console.log('server running at ', port);
});
