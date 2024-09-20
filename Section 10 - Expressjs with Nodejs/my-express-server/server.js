const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello Sarah</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact Us Page");
});

app.get("/about", function (req, res) {
  res.send("About Page");
});


app.get("/hobbies", function (req, res) {
  res.send("Hobbies Page");
});


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
