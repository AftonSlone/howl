'use strict';
module.exports = (sequelize, DataTypes) => {
  const BusinesType = sequelize.define('BusinesType', {
    name: DataTypes.STRING
  }, {});
  BusinesType.associate = function(models) {
    BusinesType.hasMany(models.Business, { foreignKey: 'typeId' });

  };
  return BusinesType;
};
