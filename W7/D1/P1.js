// Basics of ExpreesJS - setup
// npm init -y
// npm install express

// import module of Express.
const express = require('express');
// Calling express function creates the main application object.
// Thos object is used to register routes and middleware.
const app = express();

// app.get() is used to register a route handler for GET requests to the root URL ("/").
app.get("/",function(req,res){
    // res.send() sends a response boody and ends the response automatically.
    res.send("Hello From Express Server");
});

// listen() is the function on a chosen port number
app.listen(4000,function(){
    console.log("Express Server is running at http://localhost:4000");
});
