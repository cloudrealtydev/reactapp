const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {***REMOVED***

    //Convert empty fields into empty strings to use validator
    data.name = !isEmpty(data.name) ? data.name : "";
    data.uid = !isEmpty(data.uid) ? data.uid : "";



    uid: { type: Number, required: true },
    reco_id: { type: Number, required: [true, "If no RECO available, use last 7 digits of your phone number"] },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, lowercase: true,  match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
    password: { type: String, required: true },
    email: {type: String, lowercase: [true, "All lowercase"], required: [true, "Can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    email2: {type: String, lowercase: [true, "All lowercase"], required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    status: { type: Boolean, required: true, default: 0 },
    role: { type: String, required: true },
    birthday: { type: Date, required: true }
}