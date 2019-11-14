const express = require("express");
const Product_Cart = require("sequelize");
const router = express.Router();
const { Category, Product, User, Product_cart } = require("../models");

router.get("/", async function(req, res, next) {
  const users = await User.findAll();
  res.send(users);
});

router.put("/user", async function(req, res, next) {
  if (req.body.userType == "user") {
    User.update(
      { userType: "admin" },
      {
        where: { id: req.body.id }
      }
    ).then(user => {
      res.send(user);
    });
  } else {
    User.update(
      { userType: "user" },
      {
        where: { id: req.body.id }
      }
    ).then(user => {
      res.send(user);
    });
  }
});

router.delete("/:user", async function(req, res, next) {
  User.destroy({ where: { id: req.params.user } })
    .then(() => {
      res.status(201);
    })
    .catch(err => res.sendStatus(500));
});

router.post("/create", function(req, res, next) {
  Product.create(req.body)
    .then(product => {
      Category.findAll().then(categories => {
        let newCat = [];
        let existingCats = [];
        let catNames = categories.map(category => {
          return category.categoryName;
        });
        product.category.map(category => {
          if (!catNames.includes(category)) newCat.push(category);
          else existingCats.push(categories[catNames.indexOf(category)]);
        });
        newCat.map(cat => {
          product.createCategory({ categoryName: cat });
        });
        existingCats.map(cat => {
          product.addCategory(cat);
        });
        res.status(201);
      });
    })
    .catch(err => res.sendStatus(500));
});
// hola!!
router.delete("/:user", async function(req, res, next) {
  User.destroy({ where: { id: req.params.user } })
    .then(() => {
      res.status(201);
    })
    .catch(err => res.sendStatus(500));
});

module.exports = router;
