const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Configuration = sequelize.define(
  "Configuration",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "configurations",
    timestamps: true,
    underscored: true,
  }
);

module.exports = Configuration;
