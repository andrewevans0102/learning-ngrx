const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: true }));
const port = 1122;
const fs = require("fs");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const moment = require("moment");

app.get("/health", (req, res) => {
  res.status(200).send("server is running successfully");
});

app.get("/orders", async (req, res) => {
  let rawdata = fs.readFileSync("orders.json");
  let orders = JSON.parse(rawdata);
  res.status(200).send(orders);
});

app.post("/create", async (req, res) => {
  let rawdata = fs.readFileSync("orders.json");
  let orders = JSON.parse(rawdata);

  const id = orders.length + 1;

  const order = {
    id: orders.length + 1,
    name: req.body.name,
    date: moment.now(),
    description: req.body.description,
  };

  orders.push(order);

  let data = JSON.stringify(orders);
  fs.writeFileSync("orders.json", data);
  res.status(200).send();
});

app.delete("/delete/:id", async (req, res) => {
  let rawdata = fs.readFileSync("orders.json");
  let orders = JSON.parse(rawdata);

  let orders2 = orders.filter((value) => {
    if (value.id !== parseInt(req.params.id)) {
      return true;
    }
  });

  let data = JSON.stringify(orders2);
  fs.writeFileSync("orders.json", data);
  res.status(200).send(req.params.id);
});

app.post("/login", async (req, res) => {
  res.status(200).send();
});

app.post("/logout", async (req, res) => {
  res.status(200).send();
});

app.listen(port);
