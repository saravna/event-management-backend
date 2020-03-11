'use strict';
module.exports = (sequelize, DataTypes) => {
  const schedule = sequelize.define('schedule', {
    eventId : DataTypes.INTEGER,
    timing: DataTypes.STRING,
    description: DataTypes.STRING,
    mentorId: DataTypes.INTEGER
  }, {});
  schedule.associate = function(models) {
    schedule.belongsTo(models.mentor)
  };
  return schedule;
};