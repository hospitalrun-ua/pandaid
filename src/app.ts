import express from "express";

const app = express();
const port = 8081;
app.get("/", (req, res) => {
  res.send("hello hospital help!");
});

app.get("/hospital/1", function(req, res) {
  var fs = require("fs");
  fs.readFile("./src/models/hospital.json", "utf8", function(err, data) {
    if (err) throw err;
    res.setHeader("Content-Type", "application/json");
    res.end(data);
  });
});

app.get("/needs", function(req, res) {
  var fs = require("fs");
  fs.readFile("./src/models/needsReturn.json", "utf8", function(err, data) {
    if (err) throw err;
    res.setHeader("Content-Type", "application/json");
    res.end(data);
  });
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
