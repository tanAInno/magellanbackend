Magellan = require('../models/magellanModel')

exports.index = function (req, res) {
    Magellan.get(function (err, magellans) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Magellans data retrieved successfully",
            data: magellans
        });
    });
};

exports.new = function (req, res) {
    var magellan = new Magellan();
    magellan.name = req.body.name;
    magellan.PM2_5 = req.body.PM2_5;
    magellan.Temperature = req.body.Temperature;
    magellan.Humidity = req.body.Humidity;
    magellan.Date = req.body.Date;
// save the asset and check for errors
    magellan.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New magellan created!',
            data: magellan
        });
    });
};