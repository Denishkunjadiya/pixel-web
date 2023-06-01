const mysql = require('mysql2');

const mycursor = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "",
    database : "pixell_db"
});

module.exports = mycursor;



