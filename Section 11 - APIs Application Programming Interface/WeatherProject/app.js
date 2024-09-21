const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Nakuru&appid=8f8f93d3e145ff5f4251e8dfe11fb626&units=metric";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);

      const temp = weatherData.main.temp;
      console.log(temp);

      const pressure = weatherData.main.pressure;
      console.log(pressure);

      const description = weatherData.weather[0].description;
      console.log(description);

      const icon = weatherData.weather[0].icon;

      const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
      

      res.write("<h1>The weather is currently  " + description + "</h1>");

      res.write(
        "<h2> The temperature in Nakuru is " + temp + " degrees Celcius. </h2>"
      );

      res.write("<h3>The pressure today is " + pressure + "</h3>");

      res.write("<img src=" + imageURL + ">");

      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
