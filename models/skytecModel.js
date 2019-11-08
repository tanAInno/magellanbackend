var mongoose = require('mongoose')

var skytecSchema = mongoose.Schema({
    data: {
        type: String,
        default: ''
    },
})

var skytec = module.exports = mongoose.model('skytec', skytecSchema);
module.exports.get = function (callback, limit) {
    skytec.find(callback).limit(limit);
}