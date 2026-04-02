// Setting and reading cookies

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// Cookie parser reads the cookie request header and places the paresed values into req.cookies.
app.use(cookieParser());
app.get("/set-language", function (req, res) {
    res.cookie("language", "english", {
        maxAge: 60 * 60 * 1000 // 1 hour
    });
    res.send("Language cookie has been set to 'english'");
});
app.get("/get-language", function (req, res) {
    const language = req.cookies.language;
    res.json({
        message:"Cookie read from request",
        language: language || "No language cookie found"
    });
});

app.listen(4000, function () {
    console.log("Cookie demo server running @ http://localhost:4000");
}); 