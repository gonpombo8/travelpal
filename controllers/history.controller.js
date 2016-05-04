"use strict";
var models  = require('../models');
var History = models.history;
var Picture = models.picture;
var citiesController = () => {
  var index = (req, res, next) => {
    History
    .withCityAndPerson(req.query)
    .then(histories => {
      res.send(histories);
    });
  }
  var create = (req, res, next) => {
    var history = History.build(req.body);
    history
      .save()
      .then((history) => {
        return Picture.bulkCreate(Picture.mapValues(req.files, {historyId: history.dataValues.id}))
      })
      .then((picture) => {
            res.send(history);
          })
      .catch((err) => {
        console.log("[ERROR][createHistory]", err.stack);
        res.send(500, "Picture create error");
      });
  }
  return {
    index: index,
    create: create
  }
}
module.exports = citiesController();