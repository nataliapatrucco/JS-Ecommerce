const S = require("sequelize");
const db = require("../config/db");

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
  { sequelize: db, modelName: "review" }
);

module.exports = Review;
