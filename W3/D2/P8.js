// Default Parameters

function product(a,b){
    return a * b;
}
console.log("Product of 15 and 4",product(15,4));
console.log("Product of 15 ",product(15));

// Reset Parameters
function sumOfAll(...nmbers){
    console.log(...numbers);
}

sumOfAll(1,2,3);
sumOfAll(10);