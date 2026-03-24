// Understanding The Event Loop

console.log("1. Synchronous Task Started.");

// setTimeout Schdules A Callback For Later.
setTimeout(() => {
    console.group("3. Timer Callback Executed.");
},0);

console.log("2. Synchronous Task Finished.");