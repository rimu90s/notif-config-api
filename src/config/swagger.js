const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Notif Config API",
      version: "1.0.0",
      description: "Configuration & Notification Service API",
    },
    servers: [
      {
        url: process.env.NODE_ENV === "production"
          ? "https://notif-config-api.onrender.com"
          : "http://localhost:3000",
        description: "Dynamic server"
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
