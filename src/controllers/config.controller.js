const configService = require("../services/config.service");

class ConfigController {
  async create(req, res, next) {
    try {
      const result = await configService.createConfig(req.body);

      res.status(201).json({
        success: true,
        message: "Configuration created",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async findAll(req, res, next) {
    try {
      const result = await configService.getAllConfigs();

      res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async findById(req, res, next) {
    try {
      const result = await configService.getConfigById(req.params.id);

      res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const result = await configService.updateConfig(req.params.id, req.body);

      res.json({
        success: true,
        message: "Configuration updated",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await configService.deleteConfig(req.params.id);

      res.json({
        success: true,
        message: "Configuration deleted",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ConfigController();
