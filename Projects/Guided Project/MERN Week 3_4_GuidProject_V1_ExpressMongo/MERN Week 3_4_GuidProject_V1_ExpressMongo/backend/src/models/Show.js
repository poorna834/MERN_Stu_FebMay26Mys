const mongoose = require("mongoose");
const seatSchema = new mongoose.Schema({
    seatNumber:{
        type:String,
        required:true
    },
    isBooked:{
        type:Boolean,
        default:false,
    },
},{_id:false});

const showSchema = new mongoose.Schema({
    movieId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Movie",
        required:true,
    },
    date:{
        type:Date,
        required:true,
        index:true,
    },
    time:{
        type:String,
        required:true,
    },
    totalSeats:{
        type:Number,
        required:true,
    },
    availableSeats:{
        type:Number,
        reuired:true,
    },
    seats:{
        type:[seatSchema],
        required:true,
    },
    isActive:{
        type:"Boolean",
        default:true,
    },
},
{
    timestamps:true,
});

// Compound Index

showSchema.index({movieId:1,date:1});

// Add Validation

showSchema.pre("save",function(next){
    if (this.availableSeats>this.totalSeats) {
        return next(new Error("Available Seats Cannot Exceed Total Seats"));
    }
    next();
});

module.exports = mongoose.model("show");