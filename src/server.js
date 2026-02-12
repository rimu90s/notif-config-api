require("dotenv").config();
const app = require("./app");
const { connectDB, sequelize } = require("./config/database");

require("./models/config.model");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  await sequelize.sync({ alter: true });
  console.log("Database synced");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
