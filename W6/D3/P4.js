//Reading & writing files asynchronous with fs/Promises

const fs = require("fs/promises");
const path = require("path");

async function runPromiseBasedFileFlow(){
    const filePath = path.join(__dirname,"promises-note.txt");

    try{
        await fs.appendFile(filePath,"written using fs/promises. This works with async/await");
        console.log("File writing using fs/promises");

        const content = await fs.readFile(filePath,"utf-8");
        console.log(content);
    }
    catch(error){
        console.log("Promise-based fs error:",error.message);
    }
} 
runPromiseBasedFileFlow();