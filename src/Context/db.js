// db.js

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "paladin13",
  database: "generalMachine",
});

module.exports = connection;
