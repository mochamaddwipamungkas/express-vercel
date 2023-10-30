const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Success" });
});
app.get("/users", (req, res) => {
  return res.send("Daftar User");
});

app.listen(3007, () => {
  console.log("Process running at port 3007");
});
