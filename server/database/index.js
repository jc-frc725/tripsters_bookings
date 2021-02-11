const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  max: 400,
});

pool.connect()
  .then(console.log('Connected to PostgreSQL.'))
  .catch(error => console.error(error));

module.exports = pool;
