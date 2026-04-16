const user = require("./user");
function editProfile(rl,callback){
    const CurrentUser = user.getCurrentUser();
    if(!CurrentUser){
        console.log("\n Create profile First\n");
        return callback();

        
    }
    console.log("\n================================\n");
    console.log("1. Add Skill");
    console.log("2. Add Experience");
    console.log("3. Add Education");
    rl.question("enter your choice :-",(choice)=>{
        switch(choice){
            case "1":
                rl.question("enter your skill",(skill)=>{
                    CurrentUser.skills.push(skill);
                    console.log("skill added sucessfully");
                    callback();
                    
                });
                break;
            case "3":
                rl.question("enter your education",(education)=>{
                    CurrentUser.education.push(education);
                    console.log("education added sucessfully");
                    callback();
                    
                });
                break;
            case "2":
                rl.question("enter your experience",(experience)=>{
                    CurrentUser.experience.push(experience);
                    console.log("experience added sucessfully");
                    callback();
                });
                break; 
            default:
                console.log("\ninvalid choice\n");
                callback();
                  
        }
    });
}
module.exports = {
    editProfile
};