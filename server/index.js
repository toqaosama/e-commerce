// index.js
const express = require('express');

const app = express();
const connection = require('./database/connection'); // Import MySQL connection

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('upload'));
const cors = require("cors");
app.use(cors()); //allow http requests local host


//===============Required Module ==================//
const auth = require("./routes/Auth");


app.listen(4000,"localhost", () =>{
console.log("SERVER IS RUNNING ");
});

app.use("/auth",auth);

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});





