const express = require('express');
const router = express.Router();
const userRoutes = require('./user-routes');
const productRoutes = require('./product-routes');
const reviewRoutes = require('./review-routes');
const cartRoutes = require('./cart-routes');

router.use('/user', userRoutes);
router.use('/product', productRoutes);
//router.use('/review', reviewRoutes);
//router.use('/cart', cartRoutes);

module.exports = router  //add review and carts later