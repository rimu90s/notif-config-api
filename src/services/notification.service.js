const notificationRepository = require("../repositories/notification.repository");
const AppError = require("../utils/appError");

class NotificationService {
  async createNotification(data) {
    const notification = await notificationRepository.create(data);

    // Simulate sending process
    setTimeout(async () => {
      try {
        await notificationRepository.update(notification.id, {
          status: "sent",
        });
      } catch {
        await notificationRepository.update(notification.id, {
          status: "failed",
        });
      }
    }, 1000);

    return notification;
  }

  async getAllNotifications() {
    return await notificationRepository.findAll();
  }

  async getNotificationById(id) {
    const notif = await notificationRepository.findById(id);
    if (!notif) {
      throw new AppError("Notification not found", 404);
    }
    return notif;
  }

  async deleteNotification(id) {
    const deleted = await notificationRepository.delete(id);
    if (!deleted) {
      throw new AppError("Notification not found", 404);
    }
    return true;
  }
}

module.exports = new NotificationService();
