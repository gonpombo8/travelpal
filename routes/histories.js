var express = require('express');
var router = express.Router();
var models  = require('../models');
var History = models.history;
router
.get('/', function(req, res) {
  History.findAll({
    include:  [models.person, models.city]
  }).then(function(histories) {
    res.send(histories);
  });
})
.post('/', (req, res) => {
  History
    .create({
      text: req.body.text,
      personId: req.body.personId,
      cityId: req.body.cityId
    })
    .then((history) => {
    res.json(200, history);
  });
});

module.exports = router;