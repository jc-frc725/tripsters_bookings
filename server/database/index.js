const { Pool } = require('pg');
const PG_PASS = require('./pgPass');
const pool = new Pool({
  user: 'jchow',
  host: 'localhost',
  password: PG_PASS,
  database: 'bookingservice',
  port: 5432
});

pool.connect()
  .then(console.log('Connected to PostgreSQL.'))
  .catch(error => console.error(error));

module.exports = pool;
