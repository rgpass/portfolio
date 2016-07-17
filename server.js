var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
  res.render('about', {
    title: 'about me',
    env: process.env.NODE_ENV
  });
});

app.get('/my-work', function(req, res) {
  res.render('my-work', {
    title: 'my work',
    env: process.env.NODE_ENV
  });
});

app.get('/problems-i-solve', function(req, res) {
  res.render('problems-i-solve', {
    title: 'problems I solve',
    env: process.env.NODE_ENV
  });
});

app.get('/faqs', function(req, res) {
  res.render('faqs', {
    title: 'faqs',
    env: process.env.NODE_ENV
  });
});

app.get('*', function (req, res) {
  res.render('about', {
    title: 'about me',
    env: process.env.NODE_ENV
  });
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT + '!');
});
