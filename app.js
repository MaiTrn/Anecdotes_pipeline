/* eslint-disable no-undef */
// const express = require("express");
// const app = express();

// // Heroku dynamically sets a port
// const PORT = process.env.PORT || 5000;

// app.use(express.static("build"));

// app.get("/health", (req, res) => {
//   res.send("ok");
// });

// app.listen(PORT, () => {
//   // eslint-disable-next-line no-console
//   console.log("server started on port 5000");
// });

const jsonServer = require("json-server");
const app = jsonServer.create();
const middlewares = jsonServer.defaults({
  static: "./build",
});
// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

const fSystem = require("fs");
const path = require("path");

let rawData = fSystem.readFileSync(path.resolve(__dirname, "db.json"));
let data = JSON.parse(rawData);

const router = jsonServer.router(data);

app.use(middlewares);
app.use(router);

app.get("/health", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log("server started on port 5000");
});
