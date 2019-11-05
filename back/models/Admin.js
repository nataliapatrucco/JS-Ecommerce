const S = require("sequelize");
const db = require("../config/db");

const crypto = require("crypto");

class Admin extends S.Model {}

Admin.init(
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
    }
  },
  { sequelize: db, modelName: "admin" }
);

Admin.prototype.hashPassword = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};

Admin.prototype.randomSalt = function() {
  return crypto.randomBytes(16).toString("hex");
};

Admin.prototype.validatePassword = function(password) {
  let newPassword = this.hashPassword(password);
  return newPassword === this.password;
};

Admin.beforeCreate(admin => {
  admin.salt = admin.randomSalt();
  admin.password = admin.hashPassword(admin.password);
});

module.exports = Admin;
