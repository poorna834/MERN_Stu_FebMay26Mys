// try catch finally with async/await

function processPayment(isSucceeded){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(isSucceeded){
                resolve("Payment Processed Successful.");
            }
            else{
                reject("Payment Processed Unsuccessful.");
            }
        },700);
    });
}

async function runPaymentFlow(isSucceeded){
    try{
        const result = await processPayment(isSucceeded);
        console.log("Success" ,result);
    }
    catch(error){
        console.log("Failure: ",error);
    }
    finally{
        console.log("Payment Flow Completed");
    }
}

runPaymentFlow(true).then(function(){
    return runPaymentFlow(false);
});