// JWT flow with login , refresh-style logic and secure verification 

const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
app.use(express.json());

const secretKey = "MySecretKey";
const RefreshsecretKey = "MyNewSecretKey";

const refreshTokens = []; // In-memory store for refresh tokens, in production use a database
function authenticateAccessToken(req,res,next){
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({
            success:false,
            message:"Bearer token is missing"
        });
    }    
    try{
        // verify the token and attach trusted user data to the request
        req.user = jwt.verify(token,secretKey,{
            algorithms:["HS256"],
            issuer:"jwt-example",
        });
        next();
    }
    catch(error){
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({
            success:false,
            message:"Access token has expired"
        });
        }   
        return res.status(401).json({
            success:false,
            message:"Access token is invalid"
    });
}
}

app.post("/login",function(req,res){
    const {email,password} = req.body;
    // In a real application, you would validate the email and password against a database
    if(email !== "email@email.com" || password !== "pass@123"){
        return res.status(401).json({
            success:false,
            message:"Invalid Credentials"
        });
    }
    const accessToken = jwt.sign({userID:101, role:"member", email:email}, secretKey, {
        expiresIn: "10m",
        algorithm: "HS256",
        issuer: "jwt-example"
    });
    const refreshToken = jwt.sign({userID:101,email:email}, RefreshsecretKey, {
        expiresIn: "10d",  //d: days, m: minutes, s: seconds, h: hours
        algorithm: "HS256",
        issuer: "jwt-example"}
    );
    refreshTokens.push(refreshToken); // Store the refresh token
    res.json({
        success:true,
        message:"Login successful",
        accessToken:accessToken,
        refreshToken:refreshToken
    });
});

app.post("/refresh",function(req,res){
    const {refreshToken} = req.body;
    if(!refreshToken){
        return res.status(401).json({
            success:false,
            message:"Refresh token is missing"
        });
    }
    if(!refreshTokens||!refreshTokens.includes(refreshToken)){
        return res.status(401).json({
            success:false,
            message:"Invalid refresh token"
        });
    }
    try{
        const decoded = jwt.verify(refreshToken, RefreshsecretKey);
        const newAccessToken = jwt.sign({userID:decoded.userID, role:"member", email:decoded.email}, secretKey, {
            expiresIn: "15m",
            algorithms: "HS256",
            issuer: "jwt-example"
        });
        res.json({
            success:true,
            accessToken:newAccessToken
        });
    }
    catch(error){
        return res.status(403).json({
            success:false,
            message:"Refresh token verification failed"
        });
    }
});
app.get("/me",authenticateAccessToken,function(req,res){
    res.json({
        success:true,
        message:"Protected user route accessed",
        user:req.user
    });
});

app.listen(4000,function(){
    console.log("JWT demo server running @ http://localhost:4000");
});