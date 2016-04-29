"use strict"
var models     = require('../models');
var multer     = require('multer');
var router     = require('express').Router();
var City       = models.city;
var Picture    = models.picture;
var controller = require('../controllers/cities.controller');
var storage    = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + " - " + file.originalname);
  }
});
var upload = multer({storage: storage})

router
  .get('/', controller.index)
  .post('/', upload.array("pictures"), controller.create);


module.exports = router;
