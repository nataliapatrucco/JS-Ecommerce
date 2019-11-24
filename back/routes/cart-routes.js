const express = require("express");
const Product_Cart = require("sequelize");
const router = express.Router();
const { Cart, Product, User, Product_cart } = require("../models");
const nodemailer = require("nodemailer");

router.post("/checkout", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jsclothingp5@gmail.com",
      pass: "ecommercep5"
    }
  });

  const simplifyCart = cart => {
    let newCart = [];
    cart.forEach(e => newCart.push(`Product: ${e.name} - Total: ${e.price}`));
    return newCart;
  };

  const mailOptions = {
    from: "jsclothingp5@gmail.com",
    to: req.body.user.email,
    subject: "Your purchase at JS",

    text: `We are processing your order. Your order: ${JSON.stringify(
      simplifyCart(req.body.cart)
    )}`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

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

router.post("/", async function(req, res, next) {
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

router.post("/addQuantity/", function(req, res) {
  Cart.findOne({
    where: { CurrentUserCartId: req.user.id },
    include: [{ model: Product }]
  }).then(cart => {
    let foundProduct = cart.products.find(product => {
      return product.dataValues.id === req.body.id;
    });

    Product.findOne({
      where: { id: req.body.id },
      include: [{ all: true }]
    }).then(product => {
      cart.hasProduct(product).then(productExists => {
        if (productExists) {
          foundProduct.product_cart
            .update({ quantity: foundProduct.product_cart.quantity + 1 })
            .then(() => {
              Cart.findOne({
                where: { CurrentUserCartId: req.user.id },
                include: [{ model: Product }]
              }).then(cart => {
                cart.products.forEach(product => {
                  product.dataValues.quantity = product.product_cart.quantity;
                });
                res.send(cart.products);
              });
            });
        } else {
          cart.addProduct(product).then(cart2 => {
            Cart.findOne({
              where: { CurrentUserCartId: req.user.id },
              include: [{ model: Product }]
            }).then(cart => {
              res.send(cart.products);
            });
          });
        }
      });
    });
  });
});

router.post("/subtractQuantity/", function(req, res) {
  Cart.findOne({
    where: { CurrentUserCartId: req.user.id },
    include: [{ model: Product }]
  }).then(cart => {
    let foundProduct = cart.products.find(product => {
      return product.dataValues.id === req.body.id;
    });
    foundProduct.product_cart
      .update({ quantity: foundProduct.product_cart.quantity - 1 })
      .then(() => {
        Cart.findOne({
          where: { CurrentUserCartId: req.user.id },
          include: [{ model: Product }]
        }).then(cart => {
          cart.products.forEach(product => {
            product.dataValues.quantity = product.product_cart.quantity;
          });

          res.send(cart.products);
        });
      });
  });
});

router.get("/me", function(req, res, next) {
  Cart.findOne({
    where: { CurrentUserCartId: req.user.id },
    include: [{ model: Product }]
  }).then(cart => {
    cart.products.forEach(product => {
      product.dataValues.quantity = product.product_cart.quantity;
    });

    res.send(cart.products);
  });
});

//move current cart to history

module.exports = router;
