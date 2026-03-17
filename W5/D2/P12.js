// Chaining promises with centralized error handling.

function validateLoggin(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Login Validated");
        },400);
    });
}
function fetchAccountData(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const accountFound = false;
            if(accountFound){
                resolve("Account Data Loaded.")
            }else{
                reject("Account Could Not Be Found");
            }
        },700);
    });
}
validateLoggin()
.then(function(message){
    console.log(message);
    return fetchAccountData();
})
.then(function(accountMessage){
    console.log(accountMessage);
})
.catch(function(error){
    console.log("Chain Error, ",error);
});