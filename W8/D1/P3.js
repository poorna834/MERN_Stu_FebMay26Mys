//Applied Filters to the query using comparison operators.

const mongoose = require("mongoose");
async function runFilterDemo(){
    try{
        await mongoose.connect("mongodb://localhost:27017/merntraining");
        console.log("MongoDB connected successfully");
        const ProductSchema = new mongoose.Schema({
                    name: String,
                    price: Number,
                    category: String,
                    status:String
                });
                const Product = mongoose.models.Product || mongoose.model("Product",ProductSchema);
                await Product.create([
                {name: "laptop",
                price: 50000,
                category: "Electronic",
                status: "active"},
                {
                name: "Bottle",
                price: 500,
                category: "Stationary",
                status: "active"},
                {
                name: "choclate",
                price: 50,
                category: "Stationary",
                status: "inactive"},
                ]);
                const equalQuery = await Product.find({status:{$eq:"active"}});
                console.log("products which are active:",equalQuery);

                const greaterQuery = await Product.find({ price: { $gt: 5000 } });
                console.log("Products with price greater than 5000:", greaterQuery);
                
                const lesserQuery = await Product.find({ price: { $lt: 5000 } });
                console.log("Products with price lesser than 5000:", lesserQuery);
                
                const notLaptopQuery = await Product.find({ name: { $ne: "laptop" } });
                console.log("Products where name is not laptop:", notLaptopQuery);

                await mongoose.connection.close();
                console.log("connection closed");

    }
    catch(error){
        console.log("Filter demo error:",error.message);
    }
}
runFilterDemo();