var models = require('../models');

module.exports = {

  // a function which handles a get request for all messages
  get: function (req, res) {

    models.messages.getAll((messages) => {

      console.log('All messages: ', messages);

      res.statusCode = 200;
      res.end(JSON.stringify(messages));
    });

  },

  // a function which handles posting a message to the database
  post: function (req, res) {

    models.messages.create(req.body, () => {
      res.statusCode = 201;
      res.end();
    });
  }

};
