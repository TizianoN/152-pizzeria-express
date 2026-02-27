const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}`;

app.get("/", (req, res) => {
  res.json({
    message: "Benvenuto alla Pizzeria Express",
  });
});

app.listen(port, () => {
  console.log(`Server listenting on ${appUrl}`);
});
