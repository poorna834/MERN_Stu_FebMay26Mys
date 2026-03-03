// Conditional Statements
let age = 20;
if(age < 13){
    console.log("Child");
}
else if(age < 18){
    console.log("Teen");
}
else
{
    console.log("Adult");
}

// Switch Statements
console.log("Conditional Statements");
let day = 'c';
switch (day) {
    case 'c':
        console.log("Start of the week");
        break;
    case "Wednesday":
        console.log("Mid of the week");
        break;
    case "Friday":
        console.log("End of the week");
        break;
    default:
        console.log("Some day in the week");
        break;
}

// Type Converssion
let n = Number("ABC");
console.log("n:",n,"Type of n: ",typeof n, "isNaN", isNaN(n));

