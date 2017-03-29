var mongoose = require('mongoose'),
	config = require('../services/config');

mongoose.connect(config.DB, function(error){
	if(error){
		console.log("Error al tratarse de conectar a la bd de nayeapp: "+error);
	}else{
		console.log("Conexión exitosa a la bd de nayeapp!!!! :-)");
	}
});