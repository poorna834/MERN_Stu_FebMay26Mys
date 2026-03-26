// Inspecting Request Details In An Http Server

const http = require("http");

const server = http.createServer(function(req,res){
    // writeHead() sets the reponse status code and headers.
    res.writeHead(200,{"Content-Type":"text/plain"});
    //end() sends the response body and closes the response.
    // req.method tells the HTTP method, GET & POST.
    res.end("Method:" +req.method+"\nURL:"+req.url);
});

server.listen(3001,function(){
    console.log("Server is running at the http://localhost:3001");
});
