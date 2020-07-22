const express = require('express');
const router = express.Router();

// Database
const db = require('../models');

//Main Page

router.get('/', (req, res) => {
  res.render('index');
});

//User input

router.post('/', (req, res) => {
  db.User.create(req.body, (err, userInfo) => {
    if (err) console.log(err);
    res.redirect('/dashboard');
  });
});

//Dashboard

router.get('/dashboard', (req, res) => {
  db.User.find({}, (err, userInfo) => {
    if (err) console.log(err);
    res.render('dashboard', { userInfo });
  });
});

module.exports = router;
