// Callback Function
// Is a function which is passed as a argument to another function.

function greetUser(name, callback){
    console.log("Hello, ",name);
    callback();
}
greetUser("Poorna",  function(){
    console.log("Callback function executed");
});