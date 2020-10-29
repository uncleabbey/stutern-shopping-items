const express = require("express");
const bodyParser = require("body-parser");
const storeRoute = require("./routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to our store");
});

app.use("/items", storeRoute);
const port = 5000;

app.listen(port, () => console.log(`Server is listening at port: ${port}`));
