const S = require("sequelize");
const db = require("../config/db");

const User = require("./User");

class Review extends S.Model {}

Review.init(
  {
    rating: {
      type: S.INTEGER,
      defaultValue: null
      //get() {}
    },
    comment: {
      type: S.TEXT,
      notEmpty: true
    }
  },
  {}
);

Review.belongsTo(User);

module.exports = Review;
