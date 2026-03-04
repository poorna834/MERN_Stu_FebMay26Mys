// JSON Stringify & Parse
const employee = {
    id:101,
    name:"Sandeep",
    dept:"CSE",
    isActive: true
};
const jsonString = JSON.stringify(employee);
console.log(jsonString);
console.log(employee);

// JSON Parsing
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);