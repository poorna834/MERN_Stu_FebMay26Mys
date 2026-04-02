// Secure cookies with the HttpOnly flag and the Secure flag

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

app.get("/set-session", function (req, res) {
    const isProduction = process.env.NODE_ENV === "production";
    res.cookie("sessionId", "demo-session-123", {
        httpOnly: true, 
        secure: isProduction, 
        maxAge: 30 * 60 * 1000 // 1 hour
    });
    res.send("Session cookie has been set with HttpOnly and environment secure flag");
}); 

app.get("/read-session", function (req, res) {
    res.json({
        message: "Server can read the cookie value from request",
        sessionId: req.cookies.sessionId || "No session cookie found"
    });
});

app.listen(4000, function () {
    console.log("Secure cookie demo server running @ http://localhost:4000");
});
