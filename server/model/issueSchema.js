const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    issueMsg: {
        type: String,
        required: true
    }
})

const Issue = mongoose.model('ISSUE', issueSchema);

module.exports = Issue;