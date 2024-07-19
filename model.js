const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true
    },
    middleName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true,
    },
    reg: {
        type: String,
        trim: true
    },
    dob: {
        type: Date,
    },
    mobile: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    fatherName: {
        type: String,
        trim: true
    },
    motherName: {
        type: String,
        trim: true
    },
    nationality: {
        type: String,
        trim: true
    },
    category: {
        type: String,
    },
    identificationMark: {
        type: String,
        trim: true
    },
    bloodGroup: {
        type: String,
    }
});

const Personal = mongoose.model('Personal', personalSchema);

module.exports = Personal;
