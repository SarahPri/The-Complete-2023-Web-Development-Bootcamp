const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("The result is " + result);
});

// BMI Calculator
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var BMI = weight / (height * height);
  res.send("Your BMI is: " + BMI);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
