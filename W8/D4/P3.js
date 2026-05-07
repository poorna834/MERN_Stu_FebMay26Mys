// TTL 
const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/datedb");
        console.log("Connected to MongoDB");

        const otpSchema = new mongoose.Schema({
            code: String,
            createdAt: {
                type: Date,
                default: Date.now,
                expires: 30 //30 seconds
            }
        });
        const OTP = mongoose.model("OTP", otpSchema);
        await OTP.deleteMany();

        await OTP.create({ code: "999999" });
        console.log("OTP Created.");
    }
    catch (err) {
        console.log("Error:", error.message);
    }
    finally {
        await mongoose.disconnect();
        console.log("Disconnected from DB.");
    }
}

main();