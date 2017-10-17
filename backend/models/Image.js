const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let imageSchema = Schema({
    name: { type: String, required: true},
    filename: { type: String, require: true },
    path: { type: String, require: true }
});

let Image = mongoose.model('Image', imageSchema);

module.exports = Image;