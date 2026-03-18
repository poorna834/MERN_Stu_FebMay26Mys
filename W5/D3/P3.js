// Handling Error With Try/Catch Blocks

function loadCustomerProfile(){
    return new Promise(function(resolve , reject){
        const isServiceAvailable = true //false;

        if(isServiceAvailable){
            resolve("Success Customer Profile Loaded.");
        }
        else{
            reject("Unsuccessful Customer Profile Unavilable");
        }
    });
}

async function showCustomerProfile(){
    try{
        const message = await loadCustomerProfile();
        console.log(message);
    }
    catch(error){
        console.error("Error: ",error);
    }
}
showCustomerProfile();