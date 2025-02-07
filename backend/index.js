require("dotenv").config();
const express = require("express");
const sql = require("mssql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MSSQL Database Configuration
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false, // Set to true for Azure
    enableArithAbort: true,
  },
};

// Connect to MSSQL
sql.connect(dbConfig)
  .then(() => console.log("Connected to MSSQL Database 🚀"))
  .catch((err) => console.error("Database connection failed ❌", err));

// Sample Route
app.get("/", (req, res) => {
  res.send("MERN Backend is running with MSSQL! 🚀");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
