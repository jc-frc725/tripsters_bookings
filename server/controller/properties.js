const db = require('../database');

const properties = (request, response) => {
  const { propertyId } = request.params;
  db.query(`SELECT * FROM properties WHERE propertyId = ${propertyId}`)
    .then(data => {
      response.send(data.rows[0])})
    .catch(error => response.sendStatus(404));
}

module.exports = properties;