const configService = require("../services/config.service");

class ConfigController {
  async create(req, res) {
    try {
      const result = await configService.createConfig(req.body);

      return res.status(201).json({
        success: true,
        message: "Configuration created",
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  async findAll(req, res) {
    try {
      const result = await configService.getAllConfigs();

      return res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async findById(req, res) {
    try {
      const result = await configService.getConfigById(req.params.id);

      return res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const result = await configService.updateConfig(req.params.id, req.body);

      return res.json({
        success: true,
        message: "Configuration updated",
        data: result,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      await configService.deleteConfig(req.params.id);

      return res.json({
        success: true,
        message: "Configuration deleted",
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = new ConfigController();
