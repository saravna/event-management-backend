'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    cityId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    image : DataTypes.STRING
  }, {});
  event.associate = function(models) {
    event.hasMany(models.schedule)
    event.belongsToMany(models.user, {through : 'bookings'})
    event.belongsTo(models.city)
  };
  return event;
};