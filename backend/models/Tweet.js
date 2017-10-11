const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let tweetSchema = Schema({
    message: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

let Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;