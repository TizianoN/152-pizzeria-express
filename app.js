const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://localhost:${port}`;

app.get("/", (req, res) => {
  res.json({
    message: "Benvenuto alla Pizzeria Express",
  });
});

app.get("/menu", (req, res) => {
  const menu = [
    {
      name: "Margherita",
      image: "imgs/pizze/margherita.webp",
      ingredients: ["pomodoro", "mozzarella"],
    },
    {
      name: "Marinara",
      image: "imgs/pizze/marinara.jpeg",
      ingredients: ["pomodoro", "aglio", "origano"],
    },
    {
      name: "Diavola",
      image: "imgs/pizze/diavola.jpeg",
      ingredients: ["pomodoro", "mozzarella", "salame piccante"],
    },
    {
      name: "Bufalina",
      image: "imgs/pizze/bufalina.jpeg",
      ingredients: ["pomodoro", "mozzarella di bufala"],
    },
    {
      name: "4 formaggi",
      image: "imgs/pizze/4_formaggi.jpeg",
      ingredients: ["pomodoro", "mozzarella", "gorgonzola", "parmigiano", "ricotta"],
    },
  ];

  const responseData = {
    result: menu,
    success: true,
  };

  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Server listenting on ${appUrl}`);
});
