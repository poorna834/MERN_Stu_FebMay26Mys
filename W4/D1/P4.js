// Logging

console.log("Console logging");

console.warn("Warning Messages");

console.error("Error Message");

let user = [
    {id:1,name:"A"},
    {id:1,name:"B"},
];

console.log(user);
console.table(user);

// Group Related Logs

console.group("Grouped Logs");
console.log("Log 1");
console.log("Log 2");
console.log("Log 3");
console.groupEnd();

// Measure the execution time
console.time("LoopTimer");
for(let i=0;i<1000;i++){}
console.timeEnd("LoopTimer");