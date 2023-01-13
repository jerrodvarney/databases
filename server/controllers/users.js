var models = require('../models');

module.exports = {

  // a function which handles a get request for all users
  get: function (req, res) {

    models.users.getAll((results) => {
      res.statusCode = 200;
      res.end();
    });
  },

  // a function which handles posting a user to the database
  post: function (req, res) {

    models.users.create(req.body, () => {
      res.statusCode = 201;
      res.end();
    });

  }

};
