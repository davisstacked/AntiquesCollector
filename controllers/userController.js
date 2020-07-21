const express = require('express');
const router = express.Router();

// Database
const db = require('../models');

//Main Page

router.get('/', (req,res) => {
    res.render('main')
});

//User input

router.post('/', (req,res) =>{

});

//Dashboard

router.get('/dashboard', (req,res) => {
    res.render('dashboard')
})
