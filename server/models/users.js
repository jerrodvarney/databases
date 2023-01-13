var db = require('../db');
var conn = db.connection;

module.exports = {
  getAll: function (callback) {
    const queryString = 'SELECT * FROM users';

    conn.query(queryString, (err, results) => {
      if (err) {
        throw err;
      }

      callback(results);
    });
  },

  create: function (message, callback) {
    const queryString = `INSERT INTO users (username) VALUES ("${message.username}")`;

    conn.query(queryString, (err) => {
      if (err) {
        throw err;
      }

      callback();
    });
  }

};
