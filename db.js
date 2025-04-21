const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({ user: 'postgres', password: 'Lovealll@7', host: 'localhost', port: 5432, database: 'taskdb' });

module.exports = pool;
