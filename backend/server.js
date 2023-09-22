const express = require("express");
const dotenv = require("dotenv");
const notes = require("../backend/data/notes");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();

connectDB();

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));

app.get("/", (req, res) => {
  res.send("Welcome to NOTE ZIPPER");
});

app.get("/notes/all", (req, res) => {
  res.send(notes);
});

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);