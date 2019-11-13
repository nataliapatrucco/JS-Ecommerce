const express = require('express');
const Product_Cart = require('sequelize');
const router = express.Router();
const { Cart, Product, User, Product_cart } = require('../models');

//return cart history

//return current cart

router.post('/', async function(req, res, next) {
  const cart = await Cart.findOne({
    where: { CurrentUserCartId: req.user.id }
  });

  await cart.addProduct(req.body.id);

  const product_cart = await Product_cart.findOne({
    where: { cartId: cart.id, productId: req.body.id }
  });

  await product_cart.update({ quantity: product_cart.quantity + 1 });

  const array = await Product_cart.findAll({ where: { cartId: cart.id } });

  let getFrontCart = array.map(async product => {
    let frontProduct = await Product.findByPk(product.dataValues.productId);
    frontProduct.dataValues.quantity = product.dataValues.quantity;
    return frontProduct.dataValues;
  });

  const frontCart = await Promise.all(getFrontCart);
  res.send(frontCart);
});

router.get('/me', async function(req, res, next) {
  const cart = await Cart.findOne({
    where: { CurrentUserCartId: req.user.id }
  });
  const product_cartUser = await Product_cart.findAll({
    where: { cartId: cart.id }
  });
  const productsToSendPending = await Promise.all(product_cartUser);
  let productsToSendResolved = [];
  if (productsToSendPending.length) {
    productsToSendResolved = productsToSendPending.map(async product => {
      let perfectProduct = await Product.findByPk(product.dataValues.productId);
      perfectProduct.dataValues.quantity = product.dataValues.quantity;
      return perfectProduct;
    });
  }

  let kk = await Promise.all(productsToSendResolved);

  res.send(kk);
});

//move current cart to history

module.exports = router;
