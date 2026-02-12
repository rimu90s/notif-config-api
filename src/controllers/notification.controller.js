const notificationService = require("../services/notification.service");

class NotificationController {
  async create(req, res, next) {
    try {
      const result = await notificationService.createNotification(req.body);
      res.status(201).json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async findAll(req, res, next) {
    try {
      const result = await notificationService.getAllNotifications();
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
      const result = await notificationService.getNotificationById(
        req.params.id
      );
      res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await notificationService.deleteNotification(req.params.id);
      res.json({
        success: true,
        message: "Notification deleted",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new NotificationController();
