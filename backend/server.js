const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const user = require("./routes/user");
const results = require("./routes/results");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = require("./config/keys").mongoURI;
mongoose
	.connect(
		db,
		{ useNewUrlParser: true }
	)
	.then(() => console.log(`mongodb is connected`))
	.catch(err => console.log(err));

app.use("/user", user);
app.use("/results", results);
const port = process.env.PORT || 8080;
app.listen(port);
