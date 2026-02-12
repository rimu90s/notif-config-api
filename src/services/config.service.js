const configRepository = require("../repositories/config.repository");
const AppError = require("../utils/appError");

class ConfigService {
  async createConfig(data) {
    if (!data.key || !data.value) {
      throw new AppError("Key and value are required", 400);
    }

    const existing = await configRepository.findByKey(data.key);

    if (existing) {
      throw new AppError("Configuration key already exists", 400);
    }

    return await configRepository.create(data);
  }

  async getAllConfigs() {
    return await configRepository.findAll();
  }

  async getConfigById(id) {
    const config = await configRepository.findById(id);

    if (!config) {
      throw new AppError("Configuration not found", 404);
    }

    return config;
  }

  async updateConfig(id, data) {
    const config = await configRepository.findById(id);

    if (!config) {
      throw new AppError("Configuration not found", 404);
    }

    return await configRepository.update(id, data);
  }

  async deleteConfig(id) {
    const config = await configRepository.findById(id);

    if (!config) {
      throw new AppError("Configuration not found", 404);
    }

    await configRepository.delete(id);
    return true;
  }
}

module.exports = new ConfigService();
