const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",  // ✅ Just "localhost" (no port here)
    user: "root",
    password: "",       // If no password, keep empty (but ensure MySQL allows it)
    database: "e-commerce", // Make sure this database exists
    port: 3306,         // ✅ Default MySQL port (no quotes needed)
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err.message);
        
        if (err.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error("Invalid username or password. Please check your credentials.");
        } else if (err.code === 'ER_BAD_DB_ERROR') {
            console.error("The specified database does not exist.");
        } else if (err.code === 'ENOTFOUND') {
            console.error("Database host not found. Check the host name.");
        } else {
            console.error("Unexpected error:", err);
        }
        process.exit(1);
    }
    console.log("✅ DATABASE CONNECTED SUCCESSFULLY");
});

module.exports = connection;