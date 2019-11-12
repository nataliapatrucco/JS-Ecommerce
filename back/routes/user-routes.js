const express = require('express');
const router = express.Router();
const { User, Cart, Product, Product_cart } = require('../models');
const passportConfig = require('../config/passport');

//login
router.post('/login', passportConfig.authenticate('local'), async function(req, res) {
  
  const user = await User.findByPk(req.user.id)

  //buscar el carrito
  const cart = await Cart.findOne({where: {CurrentUserCartId: user.id}})

  
  if (cart) {


    if (Object.keys(req.body.localStorage).length) {

      let keys = Object.keys(req.body.localStorage);
      let i = keys.length;

      while ( i-- ) {

        let productLocal = JSON.parse(req.body.localStorage[keys[i]])


          Product_cart.findOne({where: {productId: productLocal.id, cartId: cart.id}})
          .then(instanceProduct_cart => {

            if (instanceProduct_cart !== null) {
              instanceProduct_cart.update({quantity: instanceProduct_cart.dataValues.quantity + productLocal.quantity})
            } else {
              Product.findByPk(productLocal.id)
              .then(product => {
                product.quantity = productLocal.quantity
                cart.addProduct( product )
              }) 
            }
          })



      }
          
    


    } 
  } else {

    if (Object.keys(req.body.localStorage).length) {
      
      let keys = Object.keys(req.body.localStorage);
      let i = keys.length;
      Cart.create({name: new Date})
      .then(cart => {
              user.setCurrentUserCart(cart)
              while ( i-- ) {
                let productLocal = JSON.parse(req.body.localStorage[keys[i]])
                Product.findByPk(productLocal.id)
                .then(product => {
                  cart.addProduct( product )
                  .then(() => {
                    Product_cart.findOne({where: {cartId: cart.id, productId: product.id}})
                    .then((prodCart) => {
                      prodCart.update({quantity: productLocal.quantity}).then(() =>{
                      })
                    })
                  })

                })
              }
          })
    } else {
        Cart.create({name: new Date})
        .then(cart => {
          user.setCurrentUserCart(cart)
        })
    }

  }


  res.status(201).send(req.user);
});

// register (create) user
router.post('/register', function(req, res) {
  User.create(req.body).then(user => res.status(201).send(user));
});

router.get('/logout', function(req, res) {
  req.logout();
  res.sendStatus(200);
});

router.get('/me', function(req, res) {
  res.send(req.user);
});

//return all user
//TODO

module.exports = router;
