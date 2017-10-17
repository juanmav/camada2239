const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = Schema({
    message: { type: String, required: true },
    tweet: { type: Schema.Types.ObjectId, ref: 'Tweet', required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

let Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;