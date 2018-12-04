const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		isRequired: true
	},
	email: {
		type: String,
		isRequired: true
	},
	password: {
		type: String,
		isRequired: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = User = mongoose.model("user", UserSchema);
