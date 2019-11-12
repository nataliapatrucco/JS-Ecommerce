const S = require("sequelize");
const db = require("../config/db");

class Review extends S.Model {}

Review.init(
  {
    author:{
      type: S.STRING,
      defaultValue: 'unknown'
    },
    rating: {
      type: S.INTEGER,
      defaultValue: null
    },
    comment: {
      type: S.TEXT,
      notEmpty: true
    }
  },
  { sequelize: db, modelName: "review" }
);

module.exports = Review;
