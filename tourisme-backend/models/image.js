const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: true,
        max: 100
    },
    img: {
        data: Buffer,
        contentType: String
    },
    site: {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    }
})

module.exports = mongoose.model("Image", imageSchema);