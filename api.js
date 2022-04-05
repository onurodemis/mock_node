const express = require("express");
const bodyParser = require("body-parser");
const data = require("./data");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get("/test", (req, res, next) => res.json(data));

app.post("/logger", (req, res) => {
  console.log("Test:", req.body);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
