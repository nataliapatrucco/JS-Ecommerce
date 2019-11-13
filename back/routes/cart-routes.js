const express = require('express');
const Product_Cart = require("sequelize")
const router = express.Router();
const { Cart, Product, User, Product_cart } = require('../models');

//return cart history
// router.get("/myPastOrder", (req, res, next) => {
//     User.findOne({
//         where:{name:'nati'},
//         include: [{
//             model: Cart,
//             as: 'pastOrder',
//             where:{
//                 state: 'completado'},
//             include:[{ model: Product}]
//             }] }).then(user=>{
//         res.send(user);
//     })
// })

//return current cart

router.post("/", async function(req, res, next) {

    const cart = await Cart.findOne( { where:{ CurrentUserCartId: req.user.id } } )

    const onlyWaitProdToAdd = await cart.addProduct(req.body.id)

    const product_cart = await Product_cart.findOne({where: {cartId: cart.id, productId: req.body.id}})

    const waitProdToUpdate = await product_cart.update({quantity: product_cart.quantity + 1})

    const array = await Product_cart.findAll({where: {cartId: cart.id}})

    let getFrontCart = array.map(async (product) => {
        let frontProduct = await Product.findByPk(product.dataValues.productId)
        frontProduct.dataValues.quantity = product.dataValues.quantity
        return frontProduct.dataValues
    })

    const frontCart = await Promise.all(getFrontCart)
        res.send(frontCart)
    

})


//move current cart to history

module.exports = router;