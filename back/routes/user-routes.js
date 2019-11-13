const express = require("express");
const router = express.Router();
const { User, Cart, Product, Review } = require("../models");
const passportConfig = require("../config/passport");

//login
router.post("/login", passportConfig.authenticate("local"), async function(
  req,
  res
) {
  console.log(req.body.localStorage);
  const user = await User.findByPk(req.user.id);

  //buscar el carrito

  if (Object.keys(req.body.localStorage).length) {
    let keys = Object.keys(req.body.localStorage);
    let i = keys.length;
    Cart.create({ name: new Date() }).then(cart => {
      user.setCurrentUserCart(cart);
      while (i--) {
        let productLocal = JSON.parse(req.body.localStorage[keys[i]]);
        Product.findByPk(productLocal.id).then(product => {
          product.quantity = productLocal.quantity;
          cart.addProduct(product);
        });
      }
    });
  } else {
    Cart.create({ name: new Date() }).then(cart => {
      user.setCurrentUserCart(cart);
    });
  }

  res.status(201).send(req.user);
});

// register (create) user
router.post("/register", function(req, res) {
  User.create(req.body).then(user => res.status(201).send(user));
});

router.get("/logout", function(req, res) {
  req.logout();
  res.sendStatus(200);
});

router.get("/me", function(req, res) {
  res.send(req.user);
});

router.get("/allMyInfo", (req, res, next) => {
  User.findOne({
    where: { name: req.user.name },
    include: [
      {
        model: Cart,
        as: "pastOrder",
        where: {
          state: "completado"
        },
        include: [{ model: Product }]
      },
      { model: Review }
    ]
  }).then(user => {
    res.send(user);
  });
});

router.post("/address", (req, res) => {
  req.user.update({ address: req.body.address });
  res.send(req.body.address);
});

//return all user
//TODO

module.exports = router;
