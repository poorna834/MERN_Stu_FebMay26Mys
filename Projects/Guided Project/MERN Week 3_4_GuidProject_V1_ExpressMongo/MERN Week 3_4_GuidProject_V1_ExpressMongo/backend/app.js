const express = require("express");
const authRoutes = require("./src/routes/auth.routes");
const movieRoutes = require("./src/routes/movie.routes");

const app = express();

app.use(express.json());

// Route Layers
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

// Base URL
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Movie booking API is running...",
    });
});

module.exports = app;