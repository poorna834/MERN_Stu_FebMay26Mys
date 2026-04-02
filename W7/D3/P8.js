// JWT flow with login, refresh-style logic
// and secure verification
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const secretKey = "Mysecretkey123";
const refreshSecretKey = "MyNewsecretkey";

//in-memory storage for refresh token
const refreshTokens = [];

function authenticateAccessToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Bearer token is missing.",
    });
  }
  try {
    // algorithms (verify): Only trust tokens whose alg is one of these.
    req.user = jwt.verify(token, secretKey, {
      algorithms: ["HS256"],
      issuer: "jwt-example",
    });
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Access token has expired",
      });
    }
    return res.status(401).json({
      success: false,
      message: "Access token is invalid",
    });
  }
}

app.post("/login", function (req, res) {
  const { email, password } = req.body;
  if (email !== "email@email.com" || password !== "pass@123") {
    return res.status(401).json({
      success: false,
      message: "Invalid Credentials",
    });
  }
  //algorithm (sign): Use this single algorithm to sign the token.
  const accessToken = jwt.sign(
    {
      userId: 101,
      email: email,
      role: "member",
    },
    secretKey,
    {
      expiresIn: "10m",
      algorithm: "HS256",
      issuer: "jwt-example",
    },
  );

  const refreshToken = jwt.sign(
    {
      userId: 101,
      email: email,
    },
    refreshSecretKey,
    {
      expiresIn: "10d", //d:days m:mins h:hour
      algorithm: "HS256",
      issuer: "jwt-example",
    },
  );
  refreshTokens.push(refreshToken);
  res.json({
    success: true,
    message: "login successful",
    accessToken: accessToken,
    refreshToken: refreshToken,
  });
});

app.post("/refresh", function (req, res) {
  const { refreshToken } = req.body;
  if (!refreshToken || !refreshTokens.includes(refreshToken)) {
    return res.status(401).json({
      success: false,
      message: "Refresh token is missing or invalid",
    });
  }
  try {
    const decoded = jwt.verify(refreshToken, refreshSecretKey, {
      algorithms: "HS256",
      issuer: "jwt-example",
    });

    const newAccessToken = jwt.sign(
      {
        userId: decoded.userId,
        email: decoded.email,
        role: "member",
      },
      secretKey,
      {
        expiresIn: "15m", //d:days m:mins h:hour
        algorithm: "HS256",
        issuer: "jwt-example",
      },
    );
    res.json({
      success: true,
      accessToken: newAccessToken,
    });
  } catch (error) {
    res.status(403).json({
      success: false,
      message: "Refresh token verification failed.",
    });
  }
});

app.get("/me", authenticateAccessToken, function (req, res) {
  res.json({
    success: true,
    message: "Protected user route",
    user: req.user,
  });
});

app.listen(4000, function () {
  console.log("JWT demo server running @ http://localhost:4000");
});


// Login Post : curl -X POST http://localhost:4000/login -H "Content-Type:application/json" -d "{\"email\":\"email@email.com\",\"password\":\"pass@123\"}"
// Refresh Post : curl -X POST http://localhost:4000/refresh -H "Content-Type:application/json" -d "{\"refreshToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJpYXQiOjE3NzUxMTM5MTMsImV4cCI6MTc3NTk3NzkxMywiaXNzIjoiand0LWV4YW1wbGUifQ.3LMuVD5K5RbXg9IOyQvARIxVKpr5eCcr1zu3kL10gjg\"}
// Me Post : curl http://localhost:4000/me -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEwMSwicm9sZSI6Im1lbWJlciIsImVtYWlsIjoiZW1haWxAZW1haWwuY29tIiwiaWF0IjoxNzc1MTEzOTQzLCJleHAiOjE3NzUxMTQ4NDMsImlzcyI6Imp3dC1leGFtcGxlIn0.yZJsx4ZOV-utyqZqlMid_x945lvHK8OjRbGMpOjbTAQ"