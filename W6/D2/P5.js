// Microtasks And Macrotasks in NodeJS

console.log("1. Synchronous Start.");

// Promise.resolve(...).then(...) schedule a microtasks

Promise.resolve().then(function(){
    console.log("3. Promise Microtask Executed.")
});

// setTimeout(...,0) schedules task for a later time.
// Even with 0 delay, it doesn't interrupt current sync code.
setTimeout(() =>{
    console.log("4. Timer callback executed.");
},0);

console.log("2. Synchronous End.");

