// Reading and writing file synchronously

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"sync-note.txt");

// Syntax for function usage in a module
// moduleName.functionName()

fs.writeFileSync(filePath,"This file was written using writeFileSync().\nSynchronous operation block execution");

console.log("File written synchronously.");

const content = fs.readFileSync(filePath,"utf-8");

console.log("File Read Synchronously.");

console.log(content);