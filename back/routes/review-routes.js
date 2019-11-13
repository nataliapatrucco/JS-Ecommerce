const express = require('express');
const router = express.Router();
const {Review, Product} = require('../models');


//get all user reviews


//get all product reviews
router.get("/all/:productId", function(req, res) {
    Product.findOne({where:{id: req.params.productId}}).then(product => { 
        product.getReviews().then(reviews=>{    
            res.status(200).send(reviews);
        })})
});

//create review

module.exports = router;