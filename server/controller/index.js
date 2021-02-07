const cal = require('./calendar');
const prop = require('./properties');

module.exports = {
  getCal: (req, res) => cal(req, res),
  getProp: (req, res) => prop(req, res),
};
