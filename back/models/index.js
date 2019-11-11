const Cart = require('./Cart');
const Product = require('./Product');
const Review = require('./Review');
const User = require('./User');
const Product_cart = require("./Product_cart")

Cart.belongsToMany(Product, {
    through: "product_cart",
    // foreignKey: "cartId",
    // otherKey: "productId"
  });
Product.belongsToMany(Cart, {
    through: "product_cart",
    // foreignKey: "productId",
    // otherKey: "productId"
  });

Product.hasMany(Review);

User.hasOne(Cart, { as: "CurrentUserCart" });

User.hasMany(Cart, { as: "history", foreignKey: "history" });
User.hasMany(Review);

module.exports = {Product_cart, Cart, Product, Review, User};