const express = require("express");
const router = express.Router();
const { Product } = require("../models");
const S = require("sequelize");
const Op = S.Op;

//data managing functions

//adds rating to single produce
const addRatingAndSend = async function(product, res) {
  const reviews = await product.getReviews();
  let numReviews = reviews.length;
  if (numReviews) {
    let sum = 0;
    reviews.map(review => {
      sum += review.rating;
    });
    product.rating = Math.round(sum / numReviews) / 2;
  }
  res.status(200).send(product);
};

//adds rating to array of products and sends
const addRatingsAndSend = function(products, res) {
  reviewPromiseArray = products.map(product => {
    return product.getReviews();
  });
  Promise.all(reviewPromiseArray).then(prodReviews => {
    prodReviews.forEach((reviews, i) => {
      if (reviews.length) {
        let numReviews = reviews.length;
        let sum = 0;
        reviews.map(review => {
          sum += review.rating;
        });
        products[i].rating = Math.round(sum / numReviews) / 2;
      } else products[i].rating = 0;
    });
    res.status(200).send(products);
  });
};

//get all products
router.get("/", function(req, res) {
  Product.findAll({}).then(products => addRatingsAndSend(products, res));
});

//get all products with filter
router.get("/filtered/:query", function(req, res) {
  let search = req.params.query;
  let searchLow = search.toLowerCase();
  Product.findAll({
    where: {
      name: { [Op.like]: `%${searchLow}%` }
    }
  }).then(products => addRatingsAndSend(products, res));
});

//gets all products with category
router.get("/category/:catName", function(req, res) {
  Product.findAll({
    where: { category: { [Op.contains]: [req.params.catName] } }
  }).then(products => addRatingsAndSend(products, res));
});

//get 9 random products
router.get("/random/:number", function(req, res) {
  Product.findAll().then(products => {
    let numProducts = req.params.number;
    let length = products.length;
    let randProducts = [];
    for (let i = 0; i < numProducts; i++) {
      randProducts.push(
        products.splice(Math.floor(Math.random() * length), 1)[0]
      );
      length--;
    }
    addRatingsAndSend(randProducts, res);
  });
});

//get single product

router.get("/:productId", function(req, res, next) {
  Product.findByPk(req.params.productId).then(product => {
    addRatingAndSend(product, res);
  });
});

//create new product

//edit product

//delete product

module.exports = router;
