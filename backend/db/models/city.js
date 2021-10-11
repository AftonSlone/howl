'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: DataTypes.STRING
  }, {});
  City.associate = function(models) {
    City.hasMany(models.Business, { foreignKey: 'cityId' });
  };
  return City;
};
