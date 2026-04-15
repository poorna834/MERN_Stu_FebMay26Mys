// Basics of embedding and referencing
const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to MongoDB");

        const orderSchema = new mongoose.Schema({
            product: String,
            price: Number
        });

        const userSchema = new mongoose.Schema({
            name: String,
            orders: [orderSchema] //Embedded document
        });

        const User = mongoose.model("User",userSchema);

        const embeddedUser = await User.create({
            name: "Bindu",
            orders:[
                {product: "Iphone", price:100000},
                {product: "LED TV", price:80000},
                {product: "Laptop", price:50000}
            ]
        });
        // console.log("User:\n");
        // // console.log(embeddedUser); // Fetch only one related data
        // console.log(await User.find()); // Fetch all related data
        const users = await User.find().lean();
        console.log(JSON.stringify(users,null,2));

        // Referencing
        const userRefSchema = new mongoose.Schema({
            name: String
        });
        const orderRefSchema = new mongoose.Schema({
            product: String,
            price: Number,
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "UserRef"
            }
        });
        const UserRef = mongoose.model("UserRef",userRefSchema);
        const OrderRef = mongoose.model("OrderRef",orderRefSchema);

        const refUser = await UserRef.create({name:"Rahul"});
        const refOrder = await OrderRef.create([
            {product: "printer", price: 50000, user:refUser._id},
            {product: "AC", price: 60000, user:refUser._id}
        ]);
        console.log("Referenced orders");
        console.log(await OrderRef.find().populate('user'));
    }
    catch(error) {
        console.log("Error:",error.message);
    }
    finally {
        await mongoose.disconnect();
        console.log("Disconnected from DB.");
    }
}

main()