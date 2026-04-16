const user = require("./user");
function loginProfile(rl,callback){
    const users = user.getAllUsers();
    if(users.length==0){
        console.log("first create user");
        return callback();
        
    }
    console.log("\n login profiles");

    users.forEach((singleUser,index)=>{
        console.log(`${index+1}.${singleUser.name}`);
        
    });
    rl.question("\n enter your profile number to login",(choice)=>{
        const index = Number(choice)-1;
        if(index>=0 && index<users.length){
            user.setCurrentUser(users[index]);
            console.log(`logged in as ${users[index].name}\n`);

            
        }else{
            console.log("\n invalid choice \n");
            
        }
        callback();
    })
}
module.exports = {
    loginProfile
};