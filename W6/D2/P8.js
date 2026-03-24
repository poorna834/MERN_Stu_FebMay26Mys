// Handling Error Event In EventEmitter 

const EventEmitter = require("events");

const fileEmitter = new EventEmitter();

// Register An Error Listener

fileEmitter.on("error",function(errorMessage){
    console.log("emitter handler error",errorMessage);
});

// Normal event listener:Happy Scenario
fileEmitter.on("fileProcessed",function(fileName){
    console.log("File processed successfully",fileName);
});

fileEmitter.emit("fileProcessed","report.csv");
fileEmitter.emit("error","File Processing Failed.");
