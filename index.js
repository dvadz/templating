const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //allows access to templates regardless of the current working

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/random", (req, res) => {
  const num = Math.floor(Math.random() * 100) + 1;
  res.render("random.ejs", { num: num });
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!");
});
