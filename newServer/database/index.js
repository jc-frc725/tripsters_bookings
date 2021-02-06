const { Pool } = require('pg');

const pool = new Pool({
  user: 'jchow',
  host: 'postgresql://dbuser:secretpassword@database.server.com:3211/bookingservice',
  database: 'bookingservice',
  port: 5432
});

pool.connect()
  .then(console.log('Connected to PostgreSQL.'))
  .catch(error => console.log(error));

module.exports = pool;
