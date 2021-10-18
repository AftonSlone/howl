"use strict";
module.exports = (sequelize, DataTypes) => {
  const Hours = sequelize.define(
    "Hours",
    {
      businessId: DataTypes.INTEGER,
      monday: DataTypes.STRING,
      tuesday: DataTypes.STRING,
      wednesday: DataTypes.STRING,
      thursday: DataTypes.STRING,
      friday: DataTypes.STRING,
      saturday: DataTypes.STRING,
      sunday: DataTypes.STRING,
    },
    {}
  );
  Hours.associate = function (models) {
    Hours.belongsTo(models.Business, { foreignKey: "businessId" });
  };
  return Hours;
};
