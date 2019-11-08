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
    skytec.sensorId = req.body.sensorId;
    skytec.date = req.body.date;
    skytec.time = req.body.time;
    skytec.digital1 = req.body.digital1;
    skytec.digital2 = req.body.digital2;
    skytec.digital3 = req.body.digital3;
    skytec.digital4 = req.body.digital4;
    skytec.analog0 = req.body.analog0;
    skytec.analog5 = req.body.analog5;
    skytec.humid = req.body.humid;
    skytec.temp1 = req.body.temp1;
    skytec.temp2 = req.body.temp2;
    skytec.temp3 = req.body.temp3;
    skytec.temp4 = req.body.temp4;
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

exports.deleteAll = async function (req, res) {
    let deleteAll = await Skytec.remove({}) 
    return res.json('success')
}