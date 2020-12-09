const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  database: "api_test",
  user: "root",
  port: "3306",
});

module.export = {
  getConnection: (callback) => {
    return pool.getConnection(callback);
  },
};
// let api_testdb = {};

// api_testdb.all = () => {
//   return new Promise((resolve, reject) => {
//     pool.query(`SELECT * FROM user`, (err, results) => {
//       if (err) {
//         return reject(err);
//       }

//       return resolve(results);
//     });
//   });
// };

// api_testdb.one = (id) => {
//   return new Promise((resolve, reject) => {
//     pool.query(`SELECT * FROM user WHERE id = ?`, id, (err, results) => {
//       if (err) {
//         return reject(err);
//       }

//       return resolve(results);
//     });
//   });
// };
// module.exports = api_testdb;
