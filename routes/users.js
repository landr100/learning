/* initial version starts: */
/*
var express = require('express');
var router = express.Router();

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
/* initial version ends: */

// robin code
var express = require('express');
var app = express.Router();
const Signature = require('../models/signature.js') // robin temp debug

//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
    res.json('you did it');
});
//==========================//
//====GET ALL SIGNATURES===//
app.get('/api/signatures', function(req, res) {
    Signature.find({}).then(eachOne => {
    res.json(eachOne);
    })
})
//==========================//
//====POST NEW SIGNATURE===//
app.post('/api/signatures', function(req, res) {
    Signature.create({
        guestSignature: req.body.SignatureOfGuest,
        message: req.body.MessageofGuest,
    }).then(signature => {
        res.json(signature)
    });
});
//==========================//

module.exports = app;
/*
// robin
const mongoose = require('mongoose');
module.exports = app;

//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to', url);
    }
});
//==========================//
*/
