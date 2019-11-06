const express = require("express");
const router = express.Router();
const { User } = require("../models");
const passportConfig = require("../config/passport");

//login
router.post("/login", passportConfig.authenticate("local"), function(req, res) {
  console.log("!___--------------------------");
  res.status(201).send(req.user);
});
// register (create) user
router.post("/register", function(req, res) {
  //req.user.update(req.body);
  console.log("hola");
  User.create(req.body).then(user => res.status(201).send(user));
});

router.get("/logout", function(req, res) {
  req.logout();
  res.sendStatus(200);
});

router.get("/me", function(req, res) {
  res.send(req.user);
});

//return all user
//TODO

module.exports = router;
