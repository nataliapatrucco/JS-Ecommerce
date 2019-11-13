const express = require("express");
const Product_Cart = require("sequelize");
const router = express.Router();
const { Cart, Product, User, Product_cart } = require("../models");

router.get("/", async function(req, res, next) {
  const users = await User.findAll();
  res.send(users);
});

module.exports = router;
