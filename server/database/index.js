const { Pool } = require('pg');

const pool = new Pool({
  user: 'jchow',
  password: 'galv',
  host: 'localhost',
  database: 'bookingservice',
  port: 5432
});

pool.connect()
  .then(console.log('Connected to PostgreSQL.'))
  .catch(error => console.error(error));

module.exports = pool;
