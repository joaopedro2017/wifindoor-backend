const mongoose = require('mongoose')
const moment = require('moment')

const parkingShema = mongoose.Schema({
    vehicle: {
        type: String,
        require: true
    },
    vehiclePlate: {
        type: String,
        require: true
    },
    parkingstartAt: {
        type: Date,
        require: true
    },
    parkingEndAt: Date,
    pricePerHour: {
        type: Number,
        require: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

parkingShema.index({ vehicle: 1, vehiclePlate: 1, parkingstartAt: 1 })

parkingShema.virtual('parkingCost').get(function () {
    const costPerMinute = this.pricePerHour / 60
    const _parkingAtEndAt = this.parkingEndAt ? moment(this.parkingEndAt) : moment()
    const _parkingStartAt = moment(this.parkingstartAt)
    const diffMinutes = _parkingAtEndAt.diff(_parkingStartAt, 'minutes')
    if (diffMinutes > 0)
        return (costPerMinute * diffMinutes).toFixed(2)
    else
        return (0.00).toFixed(2)
})

module.exports = mongoose.model('parking', parkingShema)