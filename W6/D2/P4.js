// Using The EventEmitter Class with multiple parameters. And Once() Function

const EventEmitter = require("events"); //events is the In-built module

// Create a new event emitter instance
// This object can publish events and allow listeners to subscribe

const orderEmitter = new EventEmitter();

// Register a listener for the "orderPlaced" event.
// Whenever the event is emitted, the function will execute.
// Once() registers a listener that automatically removes itself after running for the first time.
orderEmitter.once("orderPlaced",
    function(orderId,customerName,orderValue){
        console.log("Hello",customerName);
        console.log("Bill Amount",orderValue);
        console.log("Waiting for restaurant to accept Order.",orderId);
    }
);

orderEmitter.on("orderPlaced",
    function(orderId,customerName){
        console.log("Hello",customerName);
        console.log("Restaurant Accepted Order.",orderId);
    }
);

orderEmitter.on("orderPlaced",
    function(orderId,customerName){
        console.log("Hello",customerName);
        console.log("Assigning Delivery Partner.....");
    }
);

orderEmitter.on("orderPlaced",
    function(orderId,customerName){
        console.log("Hello",customerName);
        console.log("Ramesh is delivering your order.",orderId);
    }
);

// Emit the eventwith extra data
// The listener receives the orderId value.

orderEmitter.emit("orderPlaced", "ORD-2403001","Poorna",10000);
orderEmitter.emit("orderPlaced", "ORD-2403001","Poorna",10000);