"use strict";
var models  = require('../models');
var Person = models.person;
var Picture = models.picture;
var personController = () => {
  var index = (req, res, next) => {
    Person
    .withPictures(req.query)
    .then(persons => {
      res.send(persons)
    });
  }
  var create = (req, res, next) => {
    var person = Person.build(req.body);
    person
      .save()
      .then((person) => {
        console.log(person.dataValues.id)
        Picture
          .bulkCreate(Picture.mapValues(req.files, {personId: person.dataValues.id}))
          .then((picture) => {
            res.send(200);
          })
          .catch((err) => {
            console.log("[ERROR][createPicturePerson]", err.stack);
            res.send(500, "Person picture create error");
          })
      })
      .catch((err) => {
        console.log("[ERROR][createPerson]", err.stack);
        res.status(500).send("Picture create error");
      });
  }
  return {
    index: index,
    create: create
  }
}
module.exports = personController();