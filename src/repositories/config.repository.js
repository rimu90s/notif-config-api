const Configuration = require("../models/config.model");

class ConfigRepository {
  async create(data) {
    return await Configuration.create(data);
  }

  async findAll() {
    return await Configuration.findAll();
  }

  async findById(id) {
    return await Configuration.findByPk(id);
  }

  async findByKey(key) {
    return await Configuration.findOne({ where: { key } });
  }

  async update(id, data) {
    const config = await Configuration.findByPk(id);
    if (!config) return null;

    await config.update(data);
    return config;
  }

  async delete(id) {
    const config = await Configuration.findByPk(id);
    if (!config) return null;

    await config.destroy();
    return true;
  }
}

module.exports = new ConfigRepository();
