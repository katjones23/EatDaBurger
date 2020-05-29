const orm = require('../config/orm')

const burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },

    // The variables cols and vals are arrays.
    insertOne: function (value, cb) {
        orm.insertOne('burgers', value, function (res) {
            cb(res);
        });
    },

    updateOne: function (value, id, cb) {
        orm.updateOne('burgers', value, id, function (res) {
            cb(res);
        });
    },
};

module.exports = burger;
