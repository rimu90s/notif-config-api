const express = require("express");
const configRoutes = require("./routes/config.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running",
  });
});

app.use("/configs", configRoutes);

// 🔥 Global Error Handler (HARUS PALING BAWAH)
app.use(errorHandler);

module.exports = app;
