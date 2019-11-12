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
            console.log(instanceProduct_cart, "----------------------")

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
          
    


    //   const productsInUserCart = await Product_cart.findAll({where: {cartId: cart.id}})

    //   let isEqual
    //   let keys = Object.keys(req.body.localStorage)
    //   let i = keys.length;
    //   while ( i-- ) {
        
    //     isEqual = false;
    //     let productLocal = JSON.parse(req.body.localStorage[keys[i]])
        
    //     productsInUserCart.forEach((product_cartInstance) => {

    //       if (product_cartInstance.productId === productLocal.id) {

    //         (async function() {

    //           const product_cartInstanceUpdated = await product_cartInstance.update(
    //             { quantity: product_cartInstance.quantity + productLocal.quantity}
    //             );
    //             console.log(product_cartInstanceUpdated)
    //             isEqual = true;

    //         })()

    //       }

    //     })

    //     if (!isEqual) {

    //       const product = await Product.findByPk(productLocal.id)
    //       const updatedNewProduct = await product.update({quantity: productLocal.quantity})

    //       cart.addProduct(updatedNewProduct)

          
    //     }
    //   }

    //   res.send(req.user)

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
                  product.quantity = productLocal.quantity
                  cart.addProduct( product )
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
