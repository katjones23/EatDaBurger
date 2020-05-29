const connection = require('./connection');

const orm = {
  selectAll: function (table, cb) {
    let queryString = "SELECT * FROM ??";

    connection.query(queryString, [table], function (err, res) {
      if (err) throw err;
      cb(res)
    });
  },

  insertOne: function (table, column, value, cb) {
    let queryString = "INSERT INTO ?? (??) VALUES (?)";

    connection.query(queryString, [table, column, value], function (err, result) {
      if (err) throw err;
      cb(res)
    });
  },

  updateOne: function (table, column, value, id, cb) {
    let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";

    connection.query(queryString, [table, column, value, id], function (err, result) {
      if (err) throw err;
      cb(res)
    }
    );
  }
};

module.exports = orm;
