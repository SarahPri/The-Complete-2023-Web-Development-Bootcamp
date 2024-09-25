const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
  var today = new Date();
  if (today.getDay() === 6  || today.getDay() === 0) {
    res.send("Yuuupiiiii it's the weekend!");
  } else {
    res.send("Maan I have to work!");
  }
});

app.listen(3000, function (req, res) {
  console.log("The server is running on port 3000");
});
 