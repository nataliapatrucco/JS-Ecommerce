const S = require("sequelize");
const db = require("../config/db");


class Cart extends S.Model {}

Cart.init(
  {
    name: {
      type: S.DATE,
      allowNull: false
    },
    state: {
      type: S.ENUM("proceso", "cancelado", "completado"),
      defaultValue: "proceso"
    },
    guestID: {
      type: S.INTEGER
    },
    total: {
      type: S.VIRTUAL
      //TODO:   get(){
      //      return
      // }
    },

  },
  { sequelize: db, modelName: "cart" }
);
module.exports = Cart;


