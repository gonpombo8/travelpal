var express = require('express');
var router = express.Router();
var models  = require('../models');
var Person = models.person;

router
.get('/', function(req, res) {
  Person
    .findAll({})
    .then((persons) => {
    res.send(persons);
  });
})
.post('/', (req, res) => {
  Person
    .create({
      name: req.body.name,
      lastName: req.body.lastName
    })
    .then((person) => {
      res.send(person);
    })
})


module.exports = router;
