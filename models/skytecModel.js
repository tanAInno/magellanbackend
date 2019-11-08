var mongoose = require('mongoose')

var skytecSchema = mongoose.Schema({
    sensorId: {
        type: String,
        default: ''
    },
    date: {
        type: String,
        default: ''
    },
    time: {
        type: String,
        default: ''
    },
    digital1: {
        type: String,
        default: ''
    },
    digital2: {
        type: String,
        default: ''
    },
    digital3: {
        type: String,
        default: ''
    },
    digital4: {
        type: String,
        default: ''
    },
    analog0: {
        type: String,
        default: ''
    },
    analog5: {
        type: String,
        default: ''
    },
    humid: {
        type: String,
        default: ''
    },
    temp1: {
        type: String,
        default: ''
    },
    temp2: {
        type: String,
        default: ''
    },
    temp3: {
        type: String,
        default: ''
    },
    temp4: {
        type: String,
        default: ''
    }
})

var skytec = module.exports = mongoose.model('skytec', skytecSchema);
module.exports.get = function (callback, limit) {
    skytec.find(callback).limit(limit);
}