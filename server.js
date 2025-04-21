const express = require('express');
const cors = require('cors');
require('dotenv').config();

const notificationRoutes = require('./routes/notifications.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/notifications', notificationRoutes);

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`Notification Service running on port ${PORT}`));
