const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResultsSchema = new Schema({
	grp: {
		type: String
	},
	city: {
		type: String
	},
	meet: {
		type: String
	},
	time: {
		type: String
	},
	date: {
		type: String
	},
	distance: {
		type: String
	},
	desc: {
		type: String
	}
});

module.exports = Results = mongoose.model("results", ResultsSchema);
