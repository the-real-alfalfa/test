const express = require("express");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res, next) => {
    res.send("Kem chho?");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
