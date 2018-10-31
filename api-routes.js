let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

var magellanController = require('./controllers/magellanController')

router.route('/magellans')
    .get(magellanController.index)
    .post(magellanController.new)

module.exports = router