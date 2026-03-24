// Event Loop With Multiple Asynchronous Tasks

console.log("Main Script Started.");

// Task 1
setTimeout(() => {
    console.log("Timer A Finished After 500ms");
}, 500);

// Task 2
setTimeout(() => {
    console.log("Timer B Finished After 100ms");
}, 100);

// Task 3
setTimeout(() => {
    console.log("Timer C Finished After 0ms, but still waits for sync code to complete");
}, 0);

console.log("Main Script Ended");