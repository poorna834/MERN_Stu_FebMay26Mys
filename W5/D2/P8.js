// Introduction To Promises

console.log("Program Started.");
function getWelcomeMessage(){
    return new Promise(function(resolve){
        setTimeout(()=>
            resolve("Welcome To Promises"));
        },1000);
    };
const messagePromise = getWelcomeMessage();

console.log("Promise created. Result Not Ready Yet");

messagePromise.then(function(message){
    console.log(message);
});

console.log("Program Continues While The Promise Is Pending.");