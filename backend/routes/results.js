const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Results = require("../models/Results");

router.post("/", (req, res) => {
	const { grp, city, desc, meet, time, date, distance } = req.body;
	const newResults = {
		grp,
		city,
		desc,
		meet,
		time,
		date,
		distance
	};
	new Results(newResults)
		.save()
		.then(result => res.json(result))
		.catch(err => console.log(err));
});
router.get("/", (req, res) => {
	Results.find()
		.then(response => res.json(response))
		.catch(err => console.log(err));
});
module.exports = router;
