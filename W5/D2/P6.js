// Callback Nesting

console.log("Starting nested callback flow");

setTimeout(function(){
    console.log("Step 1: User Loaded.");

    setTimeout(function(){
        console.log("Step 2: Orders Loaded.");

        setTimeout(function(){
            console.log("Step 3: Payments Loaded.");

            setTimeout(function(){
                console.log("Step 4 : Shipment Loaded.");
                console.log("We are in callback hell!!!");
            },1000);
        },800);
    },600);
},400);