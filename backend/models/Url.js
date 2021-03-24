const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    url: { type: String, required: true},
})

module.exports = Url = mongoose.model("url", urlSchema);