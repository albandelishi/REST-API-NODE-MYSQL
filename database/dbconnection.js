const mysql = require("mysql");

const conn = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  database: "api_test",
  user: "root",
  port: "3306",
});

module.exports = conn;
