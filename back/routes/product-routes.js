const express = require('express');
const router = express.Router();
const { Product } = require('../models');
const S = require('sequelize');
const Op = S.Op;

//get 9 random products
router.get('/home', function(req, res) {
  Product.findAll({}).then(products => {
    let length = products.length;
    let prodIndexes = [];

    for (let i = 0; i < 9; i++) {
      prodIndexes.push(Math.floor(Math.random() * length)); //check this soon
    }

    let randomProducts = prodIndexes.map(index => products[index]);
    res.status(200).send(randomProducts);
    // Func above looks up randomized id's, 9 times;
    // it's not checking for repeats
    //
    /*
    const n = products.length;
    const randInd = arrLength => {
      return Math.floor(Math.random() * arrLength + 1);
    };

    let tryId = randInd(n);
    let homeProd = [];

    for (let i = 0; i < n; i++) {
      while (homeProd.includes(homeProd[tryId])) {
        tryId = randInd(n);
      }
      homeProd.push(products[randInd]);
    }

    res.status(200).send(homeProd);
    */
  });
});

//get all products (with or without filter)
router.get('/:search', function(req, res) {
  let { search } = req.params;
  if (search === '')
    Product.findAll({}).then(products => res.status(200).send(products));
  else
    Product.findAll({
      where: {
        [Op.or]: [{ name: search }, { category: { [Op.contains]: [search] } }]
      }
    }).then(products => res.status(200).send(products));
});

//get single product

//create new product

//edit product

//delete product

module.exports = router;
