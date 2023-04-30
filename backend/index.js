const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoDB = require("./db");

mongoDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use(/api/)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
