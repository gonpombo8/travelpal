"use strict";

module.exports = function(sequelize, DataTypes) {
  var City = sequelize.define("city", {
    name: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        City.hasMany(models.history);
        City.hasMany(models.picture);
      },
      withPictures: () => {
        const Picture = require('../models').picture
        return City.findAll({include: Picture}).then(cities => {
          cities = JSON.parse(JSON.stringify(cities));
          return cities.map(city => {
            city.pictures = city.pictures.map(picture => picture.url);
            return city;
          })
        })
      }
    }
  });

  return City;
};