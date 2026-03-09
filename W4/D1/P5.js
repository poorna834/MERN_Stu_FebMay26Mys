// Breakpoint
// Inspect the variable values
// view the call stack
// step through code  line by line
// evaluate expression in the console
// watch how variables change during the execution
// To find logical errors.
// Browser
function calculateTotal (prices){
    let total = 0;
    for (let i = 0; i<prices.length;i++){
        let price = prices[i];
        debugger;
        total+=price;
    }
}

let cart = [100,250,150,1000,220];
console.log("Total: ",calculateTotal(cart));