// Handling Asynchronous Errors with async/await

const express = require("express");
const app = express();

function loadUserProfile() {
    return Promise.reject(new Error("User profile cannot be loaded"));
}

app.get("/aysnc-fail",async function(req, res, next){
    try {
        const userProfile = await loadUserProfile();
        res.json(Profile);
    } 
    catch (error) {
        next(error);
    }
}
);

app.use(function(error, req, res, next){
    res.status(500).json({ success: false, message: "Async Await Error Handled Centrally" });
});

app.listen(4000, function(){
    console.log("Express Server is running on  http://localhost:4000");
});