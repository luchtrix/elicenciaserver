var mongoose = require('mongoose');/*,
	bcrypt = require('bcrypt-nodejs');*/

var User = mongoose.Schema({
	LUSUNOC: { type: String, required: true },
	LUSURFC: { type: String, required: true },
	LUSUDIR: { type: String, required: true },
	LUSUEMA: { type: String, required: true, unique: true },
	LUSUCEL: { type: String, required: true, unique: true },
	LUSUTIP: { type: String, required: true },
	LUSURES: { type: String, required: true },
	LUSUPAD: { type: String, required: true },
	LUSUDON: { type: String, required: true },
	LUSUALE: { type: String, required: true },
	LUSUSEX: { type: String, required: true },
	LUSUCUR: { type: String, required: true },
	LUSUINE: { type: String, required: true },
	LUSUTIS: { type: String, required: true },
	LUSUNOE: { type: String, required: true },
	LUSUCEE: { type: String, required: true }
});

module.exports = mongoose.model('LUSER', User);