// setImmediate vs setTimeout

console.log("Scheduling setTimeout and stImmediate");

// callbak timer
setTimeout(() => {
    console.log("Timer callback from setTimeout");
},0);

// setImmediate callback 

setImmediate(function(){
    console.log("setImmediate Callback Executed.");
});

console.log("Both Callbacks Are Now Waiting For The Event Loop.");