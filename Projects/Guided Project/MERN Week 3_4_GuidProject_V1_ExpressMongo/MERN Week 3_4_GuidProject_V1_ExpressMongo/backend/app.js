const express = require('express');
const authRoutes = require("./routesauth.routes");

const app = express();

app.use(express.json());
app.use("/api/auth",authRoutes);

// Base URL
app.get('/',(req,res) => {
    res.status(200).json({ 
    success:true,
    message: "Movie API Is Running..."
});
});

module.exports = app;
