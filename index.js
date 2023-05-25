const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Welcome to Express JS");
});

app.get("/date", (request, response) => {
  let date = new Date();
  response.send(`Today's date is ${date}`);
});

app.listen(3000);
