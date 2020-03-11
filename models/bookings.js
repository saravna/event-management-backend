'use strict';
module.exports = (sequelize, DataTypes) => {
  const bookings = sequelize.define('bookings', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  bookings.associate = function(models) {
    // associations can be defined here
  };
  return bookings;
};