// Introduction To Callback Function
function greetUser(name,callback){
    console.log("Hello, "+name);
    // The callback function is executed only after the execution of current function.
    callback();
}
function showCompletionMessage(){
    console.log("The greeting task is completed.");
}

greetUser("Ranjith",showCompletionMessage);