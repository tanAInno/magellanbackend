let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

var magellanController = require('./controllers/magellanController')
var skytecController = require('./controllers/skytecController')
var blynkController = require('./controllers/blynkController')

router.route('/blynks')
    .get(blynkController.index)
    .post(blynkController.new)
router.route('/skytecs')
    .get(skytecController.index)
    .post(skytecController.new)
router.route('/magellans')
    .get(magellanController.index)
    .post(magellanController.new)

module.exports = router