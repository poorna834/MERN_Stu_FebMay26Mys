// Middleware for req log

function loggerMiddleware(req,res,next){
    console.log(`${req.method} ${req.originalUrl}`);
}

module.exports = loggerMiddleware;

// Task: Write Log To A File Along With Timestamp with req and res