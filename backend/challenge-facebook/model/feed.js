const mongoose = require('mongoose')
let moment = require('moment');

const feedSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [15, "Name can not be more than 15 characters"]
    },

    message: {
        type: String,
        required: true,
        maxlength: [40, "Message can not be more than 40 characters"]
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: function (createdAt) {
            return moment(createdAt).format('DD/MM/YYYY');
        }
    }

    
})

module.exports = mongoose.model("feed", feedSchema)