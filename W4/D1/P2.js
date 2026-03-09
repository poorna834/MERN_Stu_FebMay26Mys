// Finally Block

function parseConfig(text){
    try{
        let config = JSON.parse(text);
        console.log(config);
        return config;
    }
    catch(err){
        console.log("Error parsing config: ", err.message);
        return null;
    }
    finally{
        console.log("Finally Block Executed");
    }
}
parseConfig('{"theme":"dark"}');
parseConfig('{"theme"}')