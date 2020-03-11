'use strict';
module.exports = (sequelize, DataTypes) => {
  const mentor = sequelize.define('mentor', {
    name: DataTypes.STRING,
    linkedIn: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  mentor.associate = function(models) {
    // associations can be defined here
  };
  return mentor;
};