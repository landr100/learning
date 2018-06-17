/* new code starts here: */
const mongoose = require('mongoose'); // robin uncomment
// const Signature = require('../models/signature.js') // robin temp debug
let Schema = mongoose.Schema;
const signatureSchema = new Schema({
    guestSignature: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    message: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
})
const Signature = mongoose.model('Signature', signatureSchema); // commented out and then uncommented
module.exports = Signature;

// robin
// const mongoose = require('mongoose');
// module.exports = app;

console.log('url is ', 'url');

//====MONGOOSE CONNECT===//
// mongoose.connect(url, function (err, db) {
const url = 'mongodb://localhost:27017/signatures';
mongoose.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to', url);
    }
});
//==========================//
