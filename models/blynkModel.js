var mongoose = require('mongoose')

var blynkSchema = mongoose.Schema({
    pm1: {
        type: String,
        default: ''
    },
    pm25: {
        type: String,
        default: ''
    },
    pm10: {
        type: String,
        default: ''
    },
    humid: {
        type: String,
        default: ''
    },
    temp: {
        type: String,
        default: ''
    },
    fan: {
        type: String,
        default: ''
    },
    filter: {
        type: String,
        default: ''
    },
    weather: {
        type: String,
        default: ''
    },
    aqi: {
        type: String,
        default: ''
    },
    datetime: {
        type: String,
        default: ''
    }
})

var blynk = module.exports = mongoose.model('blynk', blynkSchema);
module.exports.get = function (callback, limit) {
    blynk.find(callback).limit(limit);
}