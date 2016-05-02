"use strict";
var express = require('express');
var router = express.Router();
var models  = require('../models');
var Person = models.person;
var controller = require('../controllers/person.controller');
var multer = require('multer');
var storage    = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/pictures/");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + " - " + file.originalname);
  }
});
var upload = multer({storage: storage})

router
  .get('/', controller.index)
  .post('/', upload.array("pictures"), controller.create)


module.exports = router;
