const express = require("express");
const router = express.Router();
const { Review, Product } = require("../models");

//get all user reviews
router.get("/user", function(req, res) {
    req.user.getReviews().then(reviews=>{
        res.status(200).send(reviews);
    })

})

//get all product reviews
router.get("/all/:productId", function(req, res) {
  Product.findOne({ where: { id: req.params.productId } }).then(product => {
    product.getReviews().then(reviews => {
      res.status(200).send(reviews);
    });
  });
});

//create review
router.post("/", function(req, res) {
    Product.findByPk(req.body.productId).then(product=>{
        let rating = parseInt(req.body.rating.length) * 2   //converts 5 star rating to 10 point scale
        req.user.createReview({rating: rating, comment: req.body.comment, author: req.user.name}).then(review=>{
            product.addReview(review).then(() =>{
                res.status(200).send(review);
            })
        })
    })
})

module.exports = router;
