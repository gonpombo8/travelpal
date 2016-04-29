"use strict";
module.exports = function(sequelize, DataTypes) {
  var multer = require("multer");
  var Picture = sequelize.define("picture", {
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        Picture.belongsTo(models.city);
        Picture.belongsTo(models.person);
      },
      mapValues: (pictures, cityId) => {
        pictures = pictures || [];
        var a = pictures.map((picture) => {return {url: picture.path, cityId}});
        console.log(a);
        return a;
      }
    }
  });
  return Picture;
};