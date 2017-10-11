const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, unique: true },
    mail: { type: String, unique: true },
    password: String,
    isAdmin: Boolean
});

let User = mongoose.model('User', userSchema);

module.exports = User;