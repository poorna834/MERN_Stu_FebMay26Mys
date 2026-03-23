// Basics Of NodeJs Modules

const moduleTitle = "NodeJS Module Basics";
function describeModule(){
    console.log("This File Is Its Own Module");
    console.log("Title: ",moduleTitle);
    console.log("Local Values Stay Inside This Files Unless Exported");
}
describeModule(); //invoking the functions.