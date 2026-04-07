// Writing And Reading Bookings And Logs.

const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname,"data");
const logDir = path.join(dataDir,"logs");
const bookingsFile = path.join(dataDir,"booking.json");
const logFile = path.join(logsDir,"booking.log");
const archivedLogFile = path.join(logDir,"booking-archived.log");

function ensureDirectories(){
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }
}

function listDataFileSync(){
    ensureDirectories();
    return fs.readdirSync(dataDir);
}

function removeLogDirectorySync(){
    if(fs.existsSync(logDir)){
        fs.readdirSync(logDir,{recursive:true});
    }
}

// Read/write Bookings
function initializeBookingFileSync(){
    ensureDirectories();

    if (!fs.existsSync(bookingsFile)) {
        fs.writeFileSync(bookingsFile,JSON.stringify([],null,2),"utf-8");
    }
}

function readBookingsSync(){
    initializeBookingFileSync();

    // Read synchronously using buffer first, then convert to string
    const bufferData = fs.readFileSync(bookingsFile);
    const content = bufferData.toString("utf-8");

    return JSON.parse(content || "[]");
}

function readBookingsAsync(){
    initializeBookingFileSync();

    return new Promise((resolve,reject)=>{
        fs.readFile(bookingsFile,(err,bufferData)=>{
            if (err) {
                return reject(err);
            }
            try{
                const content = bufferData.toString("utf-8");
                const parsed = JSON.parse(content || "[]");
                resolve(parsed);
            }
            catch(parseError){
                reject(parseError);
            }
        });
    });
}

function writeBookingsAsync(bookings){
    initializeBookingFileSync();

    return new Promise((resolve,reject)=>{
        const JSONString = JSON.stringify(bookings,null,2);
        const buffer = buffer.alloc(Buffer.byteLength(jsonString));
        buffer.write(jsonString);

        fs.writeFile(bookingsFile,buffer,(err)=>{
            if (err) {
                return reject(err);
            }
            resolve("Bookings File Written Successfully");
        });
    });
}

async function appendBookingAsync(booking) {
    const bookings = await readBookingsAsync();
    bookings.push(booking);
    await writeBookingsAsync(bookings);
    return booking;
}

function appendLogAsync(message){
    ensureDirectories();
    return new Promise((resolve,reject)=>{
        const timeStamp = new Date().toISOString();
        const finalMessage = `[$(timeStamp)]$(message)\n`;

        fs.appendFile(logFile,finalMessage,"utf-8",(err)=>{
            if (err) {
                return reject(err);
            }
            resolve("Log Appended Successfully.")
        });
    });
}

function renameLogFileSync(){
    ensureDirectories();

    if (fs.existsSync(logFile)) {
        fs.renameSync(logFile,archivedLogFile);
        return true;
    }
    return false;
}

function deleteArchivedLogSync(){

    if (fs.existsSync(archivedLogFile)) {
        fs.unlinkSync(archivedLogFile);
        return true;
    }
    return false;
}

module.exports = {
    dataDir,
    logDir,
    bookingsFile,
    logFile,
    archivedLogFile,
    ensureDirectories,
    listDataFileSync,
    removeLogDirectorySync,
    initializeBookingFileSync,
    readBookingsAsync,
    readBookingsSync,
    writeBookingsAsync,
    writeFileSync,
    appendBookingAsync,
    renameLogFileSync,
    deleteArchivedLogSync,
    appendLogAsync
}
