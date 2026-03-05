// Reduce Function

let nums = [5,10,15];

let Average = nums.reduce((intermediateSum,current) => intermediateSum + current,0)/nums.length;
console.log(Average);  //Method 1 Average //Remove /3 to get sum or total

let total = nums.reduce((intermediateSum,current) => intermediateSum + current,0);
console.log(total); //Total/sum

let avg = total / nums.length;
console.log(avg);     //Method 2  Average

// Reduce to object count by category
let items = ["pen","pencil","eraser","pen"];
let count = items.reduce((intermediateValue,item)=>{
    intermediateValue[item] = (intermediateValue[item] || 0) + 1;
    return intermediateValue;
},{});
console.log("Item Count: ",count)