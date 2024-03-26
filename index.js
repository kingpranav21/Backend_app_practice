const express = require("express");
const app = express();
require("dotenv").config();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Finally I did it");
});
app.get("/home", (req, res) => {
  res.send("Hey ,it's me Pranav");
});
app.get("/contact", (req, res) => {
  res.send(` <a href="#"> pranav__ahuja@hotmail.baba </a> `);
});
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${port}`);
});
