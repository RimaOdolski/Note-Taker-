// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var notestData = require("../develop/db.json");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  

  app.get("/api/notes", function(req, res) {
    res.json(db);
  });


  app.post("/api/notes", function(req, res) {

    res.json(db);
  }