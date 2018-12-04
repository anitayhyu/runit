const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

router.post("/register", (req, res) => {
 const { name, email, password } = req.body
	const newUser = { name, email, password };
 bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(newUser.password, salt, (err, hash) => {
  if (err) throw err
   newUser.password = hash;
   new User(newUser).save()
   .then(user => res.json(user))
   .catch(err => console.log(err))
  });
 });
});

router.post("/login", (req, res) => {
 const { email, password } = req.body
 User.findOne({email})
 .then(user => {
  if (!user) res.status(404).json({err: `user not found`})
  bcrypt.compare(password, user.password)
   .then(isMatch => {
    if(!isMatch) res.status(404).json({err:`invalid username or password`})
    res.json(user)
   })
 })
});

module.exports = router;
