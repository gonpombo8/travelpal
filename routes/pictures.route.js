"use strict";
var express = require('express');
var router = express.Router();
var models  = require('../models');
var Picture = models.picture;

router
.get('/', (req, res) => {
  Picture
    .findAll({})
    .then((pictures) => {
    res.send(pictures);
  });
});


module.exports = router;
