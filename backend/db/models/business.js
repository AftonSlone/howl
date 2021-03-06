"use strict";
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define(
    "Business",
    {
      name: DataTypes.STRING,
      typeId: DataTypes.INTEGER,
      ownerId: DataTypes.INTEGER,
      loc: DataTypes.STRING,
      stateId: DataTypes.INTEGER,
      cityId: DataTypes.INTEGER,
      street: DataTypes.STRING,
      info: DataTypes.TEXT,
    },
    {}
  );
  Business.associate = function (models) {
    Business.belongsTo(models.BusinesType, { foreignKey: "typeId" });
    Business.belongsTo(models.User, { foreignKey: "ownerId" });
    Business.belongsTo(models.State, { foreignKey: "stateId" });
    Business.belongsTo(models.City, { foreignKey: "cityId" });
    Business.hasMany(models.Review, { foreignKey: "businessId" });
    Business.hasOne(models.Hours, { foreignKey: "businessId" });
  };
  return Business;
};
