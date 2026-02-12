const configRepository = require("../repositories/config.repository");

class ConfigService {
  async createConfig(data) {
    if (!data.key || !data.value) {
      throw new Error("Key and value are required");
    }

    const existing = await configRepository.findByKey(data.key);

    if (existing) {
      throw new Error("Configuration key already exists");
    }

    return await configRepository.create(data);
  }

  async getAllConfigs() {
    return await configRepository.findAll();
  }

  async getConfigById(id) {
    const config = await configRepository.findById(id);

    if (!config) {
      throw new Error("Configuration not found");
    }

    return config;
  }

  async updateConfig(id, data) {
    const config = await configRepository.findById(id);

    if (!config) {
      throw new Error("Configuration not found");
    }

    return await configRepository.update(id, data);
  }

  async deleteConfig(id) {
    const config = await configRepository.findById(id);

    if (!config) {
      throw new Error("Configuration not found");
    }

    await configRepository.delete(id);
    return true;
  }
}

module.exports = new ConfigService();
