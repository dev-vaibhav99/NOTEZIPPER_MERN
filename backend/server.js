const express = require("express");
const dotenv = require("dotenv");
const notes = require("../backend/data/notes");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));

app.get("/", (req, res) => {
  res.send("Welcome to NOTE ZIPPER");
});

app.get("/notes/all", (req, res) => {
  res.send(notes);
});

app.get("/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});
