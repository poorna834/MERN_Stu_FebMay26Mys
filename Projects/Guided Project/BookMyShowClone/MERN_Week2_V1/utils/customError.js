// Custom Error Class Created For Error Handling

class customError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = customError;