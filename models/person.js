"use strict";

module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define("person", {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    profession: DataTypes.STRING,
    brief: DataTypes.STRING,
    nationality: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    twitter: DataTypes.STRING,
    instagram: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Person.hasMany(models.history);
        Person.hasMany(models.picture);
      }
    }
  });

  return Person;
};