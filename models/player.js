const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const playerSchema =   new Schema({
    name : String,
    baseAmt : Number,
    password : String
});

//Model
const player = mongoose.model('player',playerSchema);

module.exports = player;