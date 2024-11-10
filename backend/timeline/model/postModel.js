const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },

    message: {
        type: String,
        required: true,
       
    }
})

module.exports = mongoose.model("post", postSchema)