var mongoose = require('mongoose')

var magellanSchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    PM2_5: {
        type: String,
        default: ''
    },
    Temperature: {
        type: String,
        default: ''
    },
    Humidity: {
        type: String,
        default: ''
    },
    Date: {
        type: String,
        default: ''
    }
})

var magellan = module.exports = mongoose.model('magellan', magellanSchema);
module.exports.get = function (callback, limit) {
    Magellan.find(callback).limit(limit);
}