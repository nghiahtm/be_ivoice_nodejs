require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "nodejs_api",
  port: process.env.DB_PORT||3306
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });
  
module.exports = db