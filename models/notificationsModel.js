const db = require('../db');

const fetchAllNotifications = () => {
 return db.query('SELECT * FROM notifications ORDER BY created_at DESC');
};

const insertNotification = (message, type, user_name) => {
 return db.query(
  'INSERT INTO notifications (message, type, user_name) VALUES ($1, $2, $3) RETURNING *',
  [message, type, user_name]
 );
};

const updateNotificationStatus = (id) => {
 return db.query('UPDATE notifications SET is_read = TRUE WHERE id = $1', [id]);
};

module.exports = { fetchAllNotifications, insertNotification, updateNotificationStatus };
