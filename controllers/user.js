var User = require('../models/user');

module.exports = {
	register: function(req, res, next){
		var nuevoUser = new User({
        	LUSUNOC: req.body.LUSUNOC,
			LUSURFC: req.body.LUSURFC,
			LUSUDIR: req.body.LUSURFC,
			LUSUEMA: req.body.LUSUEMA,
			LUSUCEL: req.body.LUSUCEL,
			LUSUTIP: req.body.LUSUTIP,
			LUSURES: req.body.LUSURES,
			LUSUPAD: req.body.LUSUPAD,
			LUSUDON: req.body.LUSUDON,
			LUSUALE: req.body.LUSUALE,
			LUSUSEX: req.body.LUSUSEX,
			LUSUCUR: req.body.LUSUCUR,
			LUSUINE: req.body.LUSUINE,
			LUSUTIS: req.body.LUSUTIS,//Tipo de samgre
			LUSUNOE: req.body.LUSUNOE,
			LUSUCEE: req.body.LUSUCEE
			//queda pendiente la descripcion del tipo de licencia
    	});
		nuevoUser.save(function(err, response){
			if(err){
				res.json({
					status: false,
					error: err	
				});
			}else{
				//req.session.user = response;
				res.json({
					status: true,
					data: response
				});
			}
		});
	},
	get: function(req, res, next){
		User.find(function(err, response){
			if(err){
				res.json({
					status: false,
					error: err	
				});
			}else{
				//req.session.user = response;
				res.json({
					status: true,
					data: response
				});
			}
		});	
	},
	getById: function(req, res, next){
		User.findById(req.params.id, function(err, response) {
	    	if(err){
				res.json({
					status: false,
					error: err	
				});
			}else{
				res.json({
					status: true,
					data: response
				});
			}
	    });
	}
};