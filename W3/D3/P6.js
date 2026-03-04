// Nested Objects and methods

const student = {
    firstName: "Santhosh",
    lastname: "Sharma",
    scores:{
        math:80,
        Science:83
    },
    hobbies:["reading","singing"],
    fullname:function(){
        return this.firstName+" "+this.lastname
    },
    greet(){
        console.log("Hi, ",this.fullname());
    }
};
console.log("Students",student);
console.log(student.fullname());