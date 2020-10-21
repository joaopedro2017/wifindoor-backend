const mongoose = require('mongoose')

const wifi = mongoose.Schema({
    signal: {
        type: String,
        require: true
    },
    power: {
        type: String,
        require: true
    },
    latency: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('wifi', wifi)