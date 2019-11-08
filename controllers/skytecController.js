Skytec = require('../models/skytecModel')

exports.index = function (req, res) {
    Skytec.get(function (err, skytecs) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Skytecs data retrieved successfully",
            data: skytecs
        });
    });
};

exports.new = function (req, res) {
    var skytec = new Skytec();
    skytec.data = req.body.data;
// save the asset and check for errors
    skytec.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New skytec created!',
            data: skytec
        });
    });
};