const Notification = require("../models/notification.model");

class NotificationRepository {
  async create(data) {
    return await Notification.create(data);
  }

  async findAll() {
    return await Notification.findAll();
  }

  async findById(id) {
    return await Notification.findByPk(id);
  }

  async update(id, data) {
    const notif = await Notification.findByPk(id);
    if (!notif) return null;

    await notif.update(data);
    return notif;
  }

  async delete(id) {
    const notif = await Notification.findByPk(id);
    if (!notif) return null;

    await notif.destroy();
    return true;
  }
}

module.exports = new NotificationRepository();
