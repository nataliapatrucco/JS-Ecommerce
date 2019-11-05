const S = require("sequelize");
const db = require("../config/db");

const Product = require("./Product");

class Cart extends S.Model {}

Cart.init(
  {
    name: {
      type: S.DATE,
      allowNull: false
    },
    state: {
      type: S.ENUM("proceso", "cancelado", "completado")
    },
    guestID: {
      type: S.INTEGER
    },
    total: {
      type: S.VIRTUAL
      //TODO:   get(){
      //      return
      // }
    }
  },
  { sequelize: "db", modelName: "cart" }
);

Cart.hasMany(Product);

module.exports = Cart;
