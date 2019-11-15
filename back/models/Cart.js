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
    total: {   //added in route before res.send
      type: S.INTEGER
    },

  },
  { sequelize: db, modelName: "cart" }
);
module.exports = Cart;


