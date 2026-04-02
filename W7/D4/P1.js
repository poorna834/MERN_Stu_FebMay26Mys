// Basics Of Cookies
const express = require("express");
const app = express();

app.get("/set-theme",function(req,res){
    // res.cookie : is a function that tells a browser to store a cookie
    res.cookie("theme","dark");
    res.send("Cookie named 'theme' with value 'dark' was sent to the browser");

    })

app.listen(4000,function(){
    console.log("JWT demo server running @ http://localhost:4000");
});

