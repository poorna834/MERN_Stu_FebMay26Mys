// Callback Handling With Named Functions
function loadUser(next){
    setTimeout(function(){
        console.log("Step 1: User Loaded.");
        next();
    },400);
}

function loadOrders(next){
    setTimeout(function(){
        console.log("Step 2: Orders Loaded.");
        next();
    },400);
}

function loadPayments(next){
    setTimeout(function(){
        console.log("Step 3: Payments Loaded.");
        next();
    },400);
}

function loadShipment(next){
    setTimeout(function(){
        console.log("Step 4: Shipment Loaded.");
        console.log("Same Flow But Easier To Read.");
    },400);
}

loadUser(function(){
    loadOrders(function(){
        loadPayments(function(){
            loadShipment();
        });
    });
});