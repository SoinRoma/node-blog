const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(createPath("index"));
});

app.get("/contacts", (req, res) => {
  res.sendFile(createPath("contacts"));
});

app.get("/posts/:id", (req, res) => {
  res.rensendFileder(createPath("post"));
});

app.get("/posts", (req, res) => {
  res.sendFile(createPath("posts"));
});

app.get("/add-post", (req, res) => {
  res.sendFile(createPath("add-post"));
});

app.use((req, res) => {
  res.status(404).sendFile(createPath("error"));
});
