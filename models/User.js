const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		location: {
			city: {
				type: String,
				required: true,
			},
			state: {
				type: String,
				required: true,
			},
		},
		interests: [],
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
