const mongoose = require('mongoose');
const bcrypctjs = require('bcrypctjs');
const jwt = require('jsonwebtoken');

// User Schema 
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

// Hashing Password to Secure
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = bcrypctjs.hashSync(this.password, 10);
    }
    next();
})

// Generate Token to Verify User
userSchema.methods.generateToken = async function () {
    try {
        let generatedToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: generatedToken });
        await this.save();
        return generatedToken;
    } catch (error) {
        console.log(error);
    }
}

// Create Model


