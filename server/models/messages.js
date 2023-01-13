var db = require('../db');
var conn = db.connection;

module.exports = {

  // a function which produces all the messages
  getAll: function (callback) {
    const queryString = 'SELECT m.username, m.text, m.roomname FROM messages m';

    conn.query(queryString, (err, results) => {
      if (err) {
        throw err;
      }

      callback(results);
    });
  },

  // a function which can be used to insert a message into the database
  create: function (message, callback) {

    const queryString = `INSERT INTO messages (username, text, roomname) VALUES ("${message.username}", "${message.message}", "${message.roomname}")`;

    conn.query(queryString, (err, results) => {
      if (err) {
        throw err;
      }

      callback();
    });
  }

};
