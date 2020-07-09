const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret

//Create Schema
const UserSchema = new Schema({
    uid: { type: Number, required: true }, //Auto Assignment
    reco_id: { type: Number, required: [true, "If no RECO available, use last 7 digits of your phone number"] },
    firstname: { type: String, required: [true, "Can't be blank"] },
    lastname: { type: String, required: [true, "Can't be blank"] },
    username: { type: String, required: [true, "Can't be blank"], lowercase: true,  match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
    password: { type: String, required: [true, "Can't be blank"] },
    email: {type: String, lowercase: [true, "All lowercase"], required: [true, "Can't be blank"], match: [/\S+@\S+\.\S+/, 'Please enter a valid email'], index: true},
    email2: {type: String, lowercase: [true, "All lowercase"], required: false, match: [/\S+@\S+\.\S+/, 'Please enter a valid email'], index: true},
    phone: { type: String, required: true, match: [/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/, 'is invalid'], index: true },
    title: { type: String, required: true }, 
    status: { type: Boolean, required: true, default: 0 }, //Dropdown
    role: { type: String, required: true }, //Dropdown
    birthday: { type: Date, required: true },
    social: { type: new Schema({ linkedin: String, facebook: String, instagram: String, twitter: String }), required: false },
    address: { type: new Schema({ city: String, street: String, houseNumber: String }), required: false }, //Geolocation
    image: { type: String, required: false } //GET from the email
}, {timestamps: true});

UserSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.method.generateJWT = function() {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, secret);
};

UserSchema.methods.toAuthJSON = function(){
    return {
        token: this.generateJWT(),
        uid: this.uid,
        reco_id: this.reco_id,
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        password: this.password,
        email: this.email,
        email2: this.email2,
        title: this.title,
        status: this.status,
        role: this.role,
        birthday: this.birthday,
        social: this.social,
        address: this.address,
        image: this.image
    }
};

module.exports = User = mongoose.model("users", UserSchema);