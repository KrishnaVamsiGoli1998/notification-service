const {
 fetchAllNotifications,
 insertNotification,
 updateNotificationStatus
} = require('../models/notificationsModel');

const { logAction } = require('../utils/auditLogger');

const getNotifications = async (req, res) => {
 try {
  const result = await fetchAllNotifications();
  res.json(result.rows);
 } catch (err) {
  res.status(500).json({ error: err.message });
 }
};

const createNotification = async (req, res) => {
 const { message, type, user_name } = req.body;
 try {
  const result = await insertNotification(message, type, user_name);
  res.status(201).json(result.rows[0]);
 } catch (err) {
  res.status(500).json({ error: err.message });
 }
};

const markAsRead = async (req, res) => {
 const id = req.params.id;
 try {
  await updateNotificationStatus(id);
  await logAction(
   'NOTIFICATION_READ',
   `Notification ${id} is marked as read`
  );
  res.json({ message: 'Marked as read' });
 } catch (err) {
  res.status(500).json({ error: err.message });
 }
};

module.exports = { getNotifications, createNotification, markAsRead };
