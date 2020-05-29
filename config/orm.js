const connection = require('./connection');

const orm = {
  selectAll: function(table) {
    let queryString = "SELECT * FROM ??";

    connection.query(queryString, [table], function(err, res) {
      if (err) throw err;

      console.log(res);
    });
  },

  insertOne: function(table, value) {
    let queryString = "INSERT INTO ?? (??) VALUES (?)";

    connection.query(queryString, [table, burger_name, value], function(err, result) {
      if (err) throw err;

      console.log(result);
    });
  },

  updateOne: function(table, value, id) {
    let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";

    connection.query(queryString, [table, devoured, value, id], function(err, result) {
        if (err) throw err;
        
        console.log(result);
      }
    );
  }
};

module.exports = orm;
