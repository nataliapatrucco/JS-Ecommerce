const express = require("express");
const router = express.Router();
const userRoutes = require("./user-routes");
const productRoutes = require("./product-routes");
const reviewRoutes = require("./review-routes");
const cartRoutes = require("./cart-routes");

router.use("/user", userRoutes);
router.use("/product", hola2, productRoutes);
//router.use('/review', reviewRoutes);
//router.use('/cart', cartRoutes);

function hola2(req, res, next) {
  console.log("hola2");
  next();
}

module.exports = router; //add review and carts later
