const S = require("sequelize");
const db = require("../config/db");

class Product_cart extends S.Model {}

Product_cart.init(
  {

    cartId: {
        type: S.INTEGER
    },
    productId: {
        type: S.INTEGER
    },
    quantity: {
        type: S.INTEGER,
        defaultValue: 0
    }
  },
  { sequelize: db, modelName: "product_cart" }
);
module.exports = Product_cart;