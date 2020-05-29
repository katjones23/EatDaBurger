const connection = require('./connection');

const orm = {
  selectAll: function (table) {
    let queryString = "SELECT * FROM ??";

    connection.query(queryString, [table], function (err, res) {
      if (err) throw err;
    });
  },

  insertOne: function (table, column, value) {
    let queryString = "INSERT INTO ?? (??) VALUES (?)";

    connection.query(queryString, [table, column, value], function (err, result) {
      if (err) throw err;
    });
  },

  updateOne: function (table, column, value, id) {
    let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";

    connection.query(queryString, [table, column, value, id], function (err, result) {
      if (err) throw err;
    }
    );
  }
};

module.exports = orm;
