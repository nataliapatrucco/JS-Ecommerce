const express = require("express");
const router = express.Router();
const { User } = require("../models");
const passportConfig = require("../config/passport");

// register (create) user
router.post("/register", function(req, res) {
  //req.user.update(req.body);

  User.create(req.body).then(user => res.status(201).send(user));

  // User.update(req.body, {where: {id: req.user.id}}).then((user)=>{
  //    res.status(201).send(user);
  //})
});

//login
router.get("/login", passportConfig.authenticate("local"), function(req, res) {
  res.status(201).send(req.user);
});

//return all user
//TODO

module.exports = router;
