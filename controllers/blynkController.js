Blynk = require('../models/blynkModel')

exports.index = function (req, res) {
    Blynk.get(function (err, blynks) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Blynks data retrieved successfully",
            data: blynks
        });
    });
};

exports.new = function (req, res) {
    var blynk = new Blynk();
    blynk.pm1 = req.body.pm1;
    blynk.pm25 = req.body.pm25;
    blynk.pm10 = req.body.pm10;
    blynk.humid = req.body.humid;
    blynk.temp = req.body.temp;
    blynk.fan = req.body.fan;
    blynk.filter = req.body.filter;
    blynk.weather = req.body.weather;
    blynk.aqi = req.body.aqi;
    blynk.datetime = req.body.datetime;
// save the asset and check for errors
    blynk.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New blynk created!',
            data: blynk
        });
    });
};