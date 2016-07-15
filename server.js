var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
  res.render('about', {
    title: 'about me',
    env: process.env.NODE_ENV
  });
});

app.get('*', function (req, res) {
  res.render('about');
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT + '!');
});
