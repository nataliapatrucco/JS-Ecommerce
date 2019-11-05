const S = require("sequelize");
const db = require("../config/db");

const crypto = require("crypto");
const Cart = require("./Cart");
const Review = require("./Review");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false
    },
    email: {
      type: S.STRING,
      notEmpty: true,
      isEmail: true,
      unique: true
    },
    password: {
      type: S.STRING,
      notEmpty: true
    },
    salt: {
      type: S.STRING
    },
    guest: {
      type: S.BOOLEAN,
      defaultValue: true
    },
    address: {
      type: S.TEXT
    }
  },
  { sequelize: db, modelName: "user" }
);

User.prototype.hashPassword = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};

User.prototype.randomSalt = function() {
  return crypto.randomBytes(16).toString("hex");
};

User.prototype.validatePassword = function(password) {
  let newPassword = this.hashPassword(password);
  return newPassword === this.password;
};

User.beforeCreate(user => {
  user.salt = user.randomSalt();
  user.password = user.hashPassword(user.password);
});

User.hasOne(Cart, { as: "currentCart" });

User.hasMany(Cart, { as: "history" });
User.hasMany(Review);

module.exports = User;
