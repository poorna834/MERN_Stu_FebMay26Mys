const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const logger = require('./middleware/loggerMiddleware');
const errorHandler = require('./middleware/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const connectionRoutes = require('./routes/connectionRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: "linkedin-secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60
  }
}));

app.use(logger);


app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "LinkedIn Clone Backend Running Successfully"
  });
});


app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/connections', connectionRoutes);
app.use('/posts', postRoutes);


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});



app.use(errorHandler);

module.exports = app;