const express = require("express");

const configRoutes = require("./routes/config.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running",
  });
});

app.use("/configs", configRoutes);

module.exports = app;
