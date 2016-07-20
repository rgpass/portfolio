const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.render('about', {
    title: 'about me',
    env: process.env.NODE_ENV
  });
});

app.get('/my-work', (req, res) => {
  res.render('my-work', {
    title: 'my work',
    env: process.env.NODE_ENV
  });
});

app.get('/problems-i-solve', (req, res) => {
  res.render('problems-i-solve', {
    title: 'problems I solve',
    env: process.env.NODE_ENV
  });
});

app.get('/faqs', (req, res) => {
  res.render('faqs', {
    title: 'faqs',
    env: process.env.NODE_ENV
  });
});

app.get('/hire-me', (req, res) => {
  res.render('hire-me', {
    title: 'hire me',
    env: process.env.NODE_ENV
  });
});

app.get('*', (req, res) => {
  res.render('about', {
    title: 'about me',
    env: process.env.NODE_ENV
  });
});

app.listen(process.env.PORT, () => {
  console.log('Example app listening on port ' + process.env.PORT + '!');
});
