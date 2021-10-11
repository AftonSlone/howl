'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    businessId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    text: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Business, { foreignKey: "businessId" });
    Review.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Review;
};
