// Checks The Permission For The Request And Allows It Or Rejects It

const CustomError = require("../utils/customError");

function roleMiddleware(...allowedRoles){
    return(req,res,next)=>{
        if (!req.user) {
            return next(new CustomError("User Info Not Found.",401));
        }
        if (!allowedRoles.includes(req.user.role)) {
            return next(new CustomError("Forbidden: You Don't Have Access To This Resource",401));
        }
        next();
    };
}
module.exports = roleMiddleware;