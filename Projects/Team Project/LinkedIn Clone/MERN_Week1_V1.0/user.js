let users = [];
let currentUser = null;
const chalk = require("chalk");

function createProfile(rl,callback){
    rl.question("Enter your Name :",(name)=>{
        rl.question("Enter your Headline:",(headline)=>{
            const user = {
                id : Date.now(),
                name:name,
                headline:headline,
                skills:[],
                education:[],
                experience:[],
                connections:[],
            };
            users.push(user);
            currentUser=user;
            console.log(chalk.green("Profile created sucessfully \n"));
            callback();
            
        });
    });
}
function viewMyProfile(callback){
    if(!currentUser){
        console.log(chalk.red("No profile found . Create profile first.\n"));
        return callback();

        
    }
    console.log("\n My profile");
    console.log("Id",currentUser.id);
    console.log("Name",currentUser.name);
    console.log("Headline",currentUser.headline);
    console.log("Skills",currentUser.skills.join(",")||"NONE");
    console.log("Education",currentUser.education.join(",")||"NONE");
    console.log("Experience",currentUser.experience.join(",")||"NONE");
    console.log("Connections",currentUser.connections.length);
    console.log("======================================================\n");
    callback();
}
function viewOtherFile(callback){
    const otherUsers = users.filter((user)=>{
        return currentUser ? user.id!==currentUser.id:true
    });
    if(otherUsers.length===0){
        console.log(chalk.red("\n No other profile created\n"));
        return callback();
        
    }
    console.log("Other profiles");
    otherUsers.forEach((user,index)=>{
        console.log(`${index+1}.${user.name}-${user.headline}`);
        
    });
    console.log();
    callback();
    
    
}
function getcurrentUser(){
    return currentUser;
}
function getAllUsers(){
    return users;
}
function setcurrentUser(selectedUser){
    currentUser = selectedUser;
}
module.exports = {
    createProfile,
    viewMyProfile,
    viewOtherFile,
    getcurrentUser,
    getAllUsers,
    setcurrentUser
};