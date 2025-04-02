const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res, next) => {
  res.send("Shubham pani nikalta h.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
