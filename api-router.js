//initialize express router
const router = require('express').Router();

//Set default API response
router.get('/', function(req, res) {
	res.json({
		status: 'API working',
		message: 'Welcome!!!',
	});
});

// Import contact controller
var contactController = require('./contactController');

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .put(contactController.update)
    .delete(contactController.delete);

// Export API routes
module.exports = router;
