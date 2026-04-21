const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Movie Title Is Required"],
        trim:true,
        index:true,
    },
    genre:{
        type:String,
        required:[true,"Genre Is Required"],
        enum:[
            "Action","Comedy","Drama","Horror","Sci-Fi","Romantic","Thriller"
        ],
        index:true,
    },
    rating:
    {
        type:Number,
        required:true,
        min:[1,"Rating Must Be At Least 1"],
        max:[5,"Rating Cannot Exceed 5"],
        index:true,

    },
    duration:{
        type:Number,
        required:[true,"Duration Is Required"],
    },
    releaseDate:{
        type:Date,
        required:[true,"Release Date Is Required"],
        index:true,
    },
    poster:{
        type:String,
        default:"",
    },
    language:{
        type:String,
        index:true,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
},{
    timestamps:true,
});

// Compound Index

movieSchema.index({genre:1,rating:-1});

// Text Index

movieSchema.index({title:"text"});

// Virtual Field

movieSchema.virtual("isReleased").get(function(){
    return this.releaseDate<=new Date();
});

module.exports = mongoose.model("Movie",movieSchema);