const express = require("express");
const router = express.Router();
const userRoutes = require("./user-routes");
const productRoutes = require("./product-routes");
const reviewRoutes = require("./review-routes");
const cartRoutes = require("./cart-routes");
const adminRoutes = require("./admin-routes");

router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/review", reviewRoutes);
router.use("/cart", cartRoutes);
router.use("/admin", adminRoutes);

module.exports = router; //add review and carts later
