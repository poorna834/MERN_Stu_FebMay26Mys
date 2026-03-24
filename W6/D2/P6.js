// process.nextTick, Promise microtask & Timer.

console.log("1. Start Of Script.");

// process.nextTick schedules a callback to run soon after the current synchronous code completes.

process.nextTick(function(){
    console.log("3. process.nextTick Callback Executed.");
});

// Promise Microtask runs fter nexTick in NodeJS

Promise.resolve().then(function(){
    console.log("4. Promise Microtask Executed.")
});

//callback timer runs later

setTimeout(() => {
    console.log("5. Timer Callback Executed.");
},0);

console.log("2. End Of Script.");