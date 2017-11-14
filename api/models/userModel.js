'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name : {
        type: String,
        required: 'User name is required'
    },
    password : {
        type: String,
        required: 'Password is required'
    }

});

module.exports = mongoose.model('Users', UserSchema);