const mongoose = require('mongoose');
const bcrypctjs = require('bcrypctjs');
const jwt = require('jsonwebtoken');

// User Schema 
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    }
})

// Hashing Password to Secure


