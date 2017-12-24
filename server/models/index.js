var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      var queryString = 'SELECT messages.id, messages.text, users.username FROM messages LEFT OUTER JOIN users WHERE (messages.userid = users.id) ORDER BY messages.id desc;';
      db.query(queryString, function(err, res) {
        // what do we do here?
        callback(res);
      });
    }, // a function which handles a get request for all messages
    post: function (callback) {
      var queryString = 'INSERT INTO messages (text, userid) values(text, SELECT (id FROM users WHERE username = ? limit 1), )';
      db.query(queryString, params, function(err, res) {
        // what do we do here?
        callback(res);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (callback) {
      var queryString = 'SELECT * FROM users;';
      db.query(queryString, function(err, res) {
        // what do we do here?
        callback(res);
      });
    },
    post: function (params, callback) {
      var queryString = 'INSERT INTO users(username) values(?);';
      db.query(queryString, params, function(err, res) {
        // what do we do here?
        callback(res);
      });
    }
  }
};

