"use strict";
module.exports = function(sequelize, DataTypes) {
  var _ = require("lodash");
  var multer = require("multer");
  var Picture = sequelize.define("picture", {
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        Picture.belongsTo(models.city);
        Picture.belongsTo(models.person);
        Picture.belongsTo(models.history);
      },
      mapValues: (pictures, id) => {
        pictures = pictures || [];
        return pictures.map((picture) => {
          let pic = {url: picture.path};
          return _.merge(pic, id)
        });
      }
    }
  });
  return Picture;
};