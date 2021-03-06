"use strict";
var models  = require('../models');
var City = models.city;
var Picture = models.picture;
var citiesController = () => {
  var index = (req, res, next) => {
    City
    .withPictures(req.query)
    .then(city => {
      res.send(city)
    });
  }
  var create = (req, res, next) => {
    var city = City.build(req.body);
    city
    .save()
    .then((city) => {
      return Picture.bulkCreate(Picture.mapValues(req.files, {cityId: city.dataValues.id}))
    })
    .then((picture) => {
      res.send(picture);
    })
    .catch((err) => {
      console.log("[ERROR][createCity]", err.stack);
      res.status(500).send("Picture create error");
    });
  }
  return {
    index: index,
    create: create
  }
}
module.exports = citiesController();