// Using The EventEmitter Class

const EventEmitter = require("events"); //events is the In-built module

// Create a new event emitter instance
// This object can publish events and allow listeners to subscribe

const orderEmitter = new EventEmitter();

// Register a listener for the "orderPlaced" event.
// Whenever the event is emitted, the function will execute.

orderEmitter.on("orderPlaced",
    function(orderId){
        console.log("Hello Poorna, Waiting for restaurant to accept Order.",orderId);
    }
);

orderEmitter.on("orderPlaced",
    function(orderId){
        console.log("Restaurant Accepted Order.",orderId);
    }
);

orderEmitter.on("orderPlaced",
    function(orderId){
        console.log("Assigning Delivery Partner.....");
    }
);

orderEmitter.on("orderPlaced",
    function(orderId){
        console.log("Ramesh is delivering your order.",orderId);
    }
);

// Emit the eventwith extra data
// The listener receives the orderId value.

orderEmitter.emit("orderPlaced", "ORD-2403001");