const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      let hbsObject = {
        burgers: data
      };

      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.name, function(result) {
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    let id = req.params.id;
  
    burger.updateOne(true, id, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;
  