// copied from:
// ref: https://hackernoon.com/how-to-combine-a-nodejs-back-end-with-a-reactjs-front-end-app-ea9b24715032
//====LIST DEPENDENCIES===//
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
// const mongoose = require('mongoose'); // robin comment out
// const Signature = require('./models/signature.js')
// const Signature = require('../models/signature.js') // robin temp debug

const app = express();
const url = 'mongodb://localhost:27017/signatures';
//=========================//

/* initial version starts here: */
// var express = require('express'); // commented out
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
/* initial version ends here: */

/* new code starts here: */
// robin code
const Signature = require('../models/signature.js') // robin temp debug

//====ROOT DIRECTORY===//
// redundant with above call to express
// router.get('/', function(req, res) { res.json('you did it'); });

//==========================//
//====GET ALL SIGNATURES===//
router.get('/api/signatures', function(req, res) {
    Signature.find({}).then(eachOne => {
    res.json(eachOne);
    })
})
//==========================//
//====POST NEW SIGNATURE===//
router.post('/api/signatures', function(req, res) {
    Signature.create({
        guestSignature: req.body.SignatureOfGuest,
        message: req.body.MessageofGuest,
    }).then(signature => {
        res.json(signature)
    });
});
//==========================//

