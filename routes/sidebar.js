var express = require("express");
var router = express.Router();

// Get Sidebar Model
var Sidebar = require("../models/sidebar");

/*
* GET edit sidebar
*/
router.get("/edit-sidebar", function(req, res) {
  var id = "5be9d245078f78259c0d5ab0";

  Sidebar.findById(id, function(err, sidebar) {
    if (err) console.log(err);
    res.json(sidebar);
  });
});
router.post("/", (req, res) => {
  Sidebar.create(req.body, (err, sidebar) => {
    if (err) {
      console.log(err);
    } else {
      res.json(sidebar);
    }
  });
});
/*
* POST edit sidebar
*/
router.post("/edit-sidebar", function(req, res) {
  var id = "5be9d245078f78259c0d5ab0";

  Sidebar.findById(id, function(err, sidebar) {
    if (err) console.log(err);

    sidebar.content = req.body.content;

    sidebar.save(function(err) {
      if (err) {
        console.log(err);
        res.json("problem");
      } else {
        res.json("ok");
      }
    });
  });
});

// Exports
module.exports = router;
