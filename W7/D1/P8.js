// Route Parameters and Query Parameters
// Route Parameters:Capture dynamic values from the path
// Query Parameters:provide optional values

const express = require('express');    
const app = express();

app.get("/products/:id",function(req,res){
    res.json({
        routeParams:req.params.id,
        queryParams:req.query
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});