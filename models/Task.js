'use strict';
module.exports = function(sequelize, DataTypes) {
  var task = sequelize.define('task', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return task;
};