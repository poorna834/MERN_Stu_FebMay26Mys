// Filter Method
let marks = [75, 49, 56, 70, 82, 51, 68];
let passed = marks.filter(mark => mark >=70);

console.log(marks);
console.log(passed);

let students = [
    {name:"Arjun", marks:75},
    {name:"krishna", marks:49},
    {name:"Bheema", marks:56},
    {name:"Anju", marks:70},
    {name:"Santhu", marks:82},
    {name:"Sinchu", marks:51},
    {name:"Bhanu", marks:68},
];
console.log(students);

let qualifiedStudents = students.filter(student => student.marks >= 70);
console.log("qualifiedStudents:",qualifiedStudents);

let qualifiedNames = qualifiedStudents.map(student => student.name); //Method 1
console.log("qualifiedStudents Names:", qualifiedNames);

let qualifiedStudents1 = students.filter(student => student.marks >= 70).map(student => student.name);  //Method 2
console.log(qualifiedStudents1)