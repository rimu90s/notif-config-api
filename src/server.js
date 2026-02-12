require("dotenv-flow").config();

const app = require("./app");
const { connectDB, sequelize } = require("./config/database");

require("./models/config.model");
require("./models/notification.model");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  if (process.env.NODE_ENV === "development") {
    await sequelize.sync({ alter: true });
    console.log("Database synced (development only)");
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log("Loaded ENV:", process.env.NODE_ENV);
    console.log("DB Name:", process.env.DB_NAME);

  });
};

startServer();
