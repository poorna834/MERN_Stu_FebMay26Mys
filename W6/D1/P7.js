// Understanding Path Module And JSON Module.

const path = require("path");
// JSON Is Loaded As A Normal JS Object In CommonJS.
const appConfig = require("./support/app-config.json");

console.log("__dirname",__dirname);
console.log("__filename",__filename);

console.log("Application Name: ",appConfig.appName);
console.log("Environment: ",appConfig.environment);
console.log("Features: ",appConfig.features.join(", ")); //join is used to remove the array representation from then output.
