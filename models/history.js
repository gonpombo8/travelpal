"use strict";

module.exports = function(sequelize, DataTypes) {
  var History = sequelize.define("history", {
    body: DataTypes.TEXT,
    title: DataTypes.STRING,
    subTitle: DataTypes.STRING,
    category: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        History.belongsTo(models.city);
        History.belongsTo(models.person);
      }
    }
  })

  return History;
};