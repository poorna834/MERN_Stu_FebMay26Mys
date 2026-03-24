// How JS Handles Asynchronous Tasks In NodeJS

function fetchReport(Callback){
    console.log("Fetching Report Data...");

    setTimeout (() => {
        const report = "Monthly Report Is Ready";
        Callback(report); 
    },1000);
}
fetchReport(function(reportMessage){
    console.log(reportMessage);
});

console.log("Application Continues To Execute Further");