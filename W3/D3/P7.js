// Object Iteration

const book = {
    title: "JS for newbies",
    author: "ABC",
    year: 2026
};

for(let key in book){
    console.log(key,":",book[key]);
}
console.log("Keys",Object.keys(book));

console.log("Values",Object.values(book));

console.log("entries",Object.entries(book));