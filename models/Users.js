/**
 *  Users Model 
 *  Created by Backend Lead
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 5,
        required: [true, 'Please add a firstname']
    },
    lastName: {
        type: String,
        required: true,
        minlength: 5,
        required: [true, 'Please add a lasttname']
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email']
    },

    password: {
        type: String,
        unique: true,
        minlength: 5,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});



/***
 * Export the model
 */
const Users = mongoose.model('users', UserSchema);

module.exports = Users;