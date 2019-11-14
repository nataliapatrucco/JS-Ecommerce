const express = require("express");
const Product_Cart = require("sequelize");
const router = express.Router();
const { Cart, Product, User, Product_cart } = require("../models");

router.post("/remove", async function(req, res, next) {
  const cart = await Cart.findOne({
    where: { CurrentUserCartId: req.user.id }
  });

  await Product_cart.destroy({
    where: { cartId: cart.id, productId: req.body.id }
  });

  const prodIdsIncart = await Product_cart.findAll({
    where: { cartId: cart.id }
  });

  const frontCart = prodIdsIncart.map(async productCartId => {
    let product = await Product.findByPk(productCartId.productId);
    product.dataValues.quantity = productCartId.dataValues.quantity;

    return product.dataValues;
  });
  let culo = await Promise.all(frontCart);

  res.send(culo);
});

router.post("/substract", async function(req, res, next) {
  const cart = await Cart.findOne({
    where: { CurrentUserCartId: req.user.id }
  });

  const prodInCart = await Product_cart.findOne({
    where: { productId: req.body.id, cartId: cart.id }
  });
  await prodInCart.update({ quantity: prodInCart.quantity - 1 });

  const prodsInCartIds = await Product_cart.findAll({
    where: { cartId: cart.id }
  });
  const frontCart = prodsInCartIds.map(async prodId => {
    let product = await Product.findByPk(prodId.productId);

    product.dataValues.quantity = prodId.dataValues.quantity;

    return product.dataValues;
  });

  const a = await Promise.all(frontCart);
  res.send(a);
});

router.post("/", async function(req, res, next) {
  const cart = await Cart.findOne({
    where: { CurrentUserCartId: req.user.id }
  });

  const onlyWaitProdToAdd = await cart.addProduct(req.body.id);

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

router.get("/me", async function(req, res, next) {
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
