// Removing EventEmitter Listeners.

const EventEmitter = require("events");

const jobEmitter = new EventEmitter();

function showJobProgress(status){
    console.log("Job Status: ",status);
}

// Add Listener
jobEmitter.on("progress",showJobProgress);

// Emit the event
jobEmitter.emit("progress","50% completed");

// Remove the listener
jobEmitter.off("progress",showJobProgress);

// Emit the event
jobEmitter.emit("progress","100% completed");