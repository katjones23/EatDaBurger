const orm = require('../config/orm')

const burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },

    insertOne: function (value, cb) {
        orm.insertOne('burgers', 'burger_name', value, function (res) {
            cb(res);
        });
    },

    updateOne: function (value, id, cb) {
        orm.updateOne('burgers', 'devoured', value, id, function (res) {
            cb(res);
        });
    },
};

module.exports = burger;
