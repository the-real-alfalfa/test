const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/shubham", (req, res, next) => {
  res.send({
    name: "Shubham",
    course: "pg-dac",
    home: "Karnataka",
    favourite: "water",
    hobby: "fetching water",
  });
});

app.get("/gautam", (req, res, next) => {
  res.send({
    name: "Gautam",
    course: "pg-dac",
    home: "MP",
    favourite: "oregano, ketchup",
    hobby: "phone call",
  });
});

app.get("/girish", (req, res, next) => {
  res.send({
    name: "Girish",
    course: "pg-dac",
    home: "UK",
    favourite: "ice-cream",
    hobby: "sleeping",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
