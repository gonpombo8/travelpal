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
      },
      withPictures: (params) => {
        let query = require('../services/query')(params); 
        const Picture = require('../models').picture;
        query.include = Picture;
        return Person.findAll(query).then(persons => {
          persons = JSON.parse(JSON.stringify(persons));
          return persons.map(person => {
            person.pictures = person.pictures.map(picture => picture.url);
            return person;
          });
        });
      }
    }
  });

  return Person;
};