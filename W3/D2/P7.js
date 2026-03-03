// Arrow Function
(args) => {
    // body of the function
}

// Add two numbers 
const Sum = (a,b) => {
    return a+b;
}
// console.log("3+5 =",Sum(3,5));
let result = Sum(4,5);
// Single line return / implicit return
const square = x => x*x;
console.log("Square Of 44: ", square(44));

const sayhello = () => console.log("Hello from arrow function");
sayhello();