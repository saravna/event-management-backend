'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    user.belongsToMany(models.event, {through : 'bookings'})
  };
  return user;
};