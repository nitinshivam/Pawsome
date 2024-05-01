const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add username"],
    },
    email: {
        type: String,
        required: [true, "Please add email address"],
        unique: [true, "email address already registered"]
    },
    password: {
        type: String,
        required: [true, "Please add password"]
    },
    appointments: [{
        date: {
            type: String,
        },
        time: {
            type: String,
        },
        petname: {
            type: String,
        },
        service: {
            type: String,
        }
    }]

}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)