const Cart = require('./Cart');
const Product = require('./Product');
const Review = require('./Review');
const User = require('./User');
const Category = require('./Category')
const Product_cart = require("./Product_cart")

Category.belongsToMany(Product, { as: "Product",
  through: "Product_Category"
});
Product.belongsToMany(Category, {
  through: "Product_Category"
});


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

User.hasMany(Cart, { as: "pastOrder"});

User.hasMany(Review);

module.exports = {Product_cart, Cart, Product, Review, User, Category};
