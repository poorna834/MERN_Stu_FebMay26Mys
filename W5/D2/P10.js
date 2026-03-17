// Chaining Promises With Return Values
function getBaseAmount(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(1000);
        },500);
    });
}

getBaseAmount()
.then(function(amount){
    console.log("Base Amount: ",amount);
    return amount+200;
})
.then(function(updatedAmount){
    console.log("Amount After Service Charge: ",updatedAmount)
    return updatedAmount - 100;
})
.then(function(finalAmount){
    console.log("Final Amount After Discount: ",finalAmount);
});