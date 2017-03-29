var express = require('express'),
	router = express.Router(),
	controller = require('../controllers/user');

router.route('/register').post(controller.register);
router.route('/get').get(controller.get);
router.route('/getById/:id').get(controller.getById);//obtener los datos de la base de datos

module.exports = router;