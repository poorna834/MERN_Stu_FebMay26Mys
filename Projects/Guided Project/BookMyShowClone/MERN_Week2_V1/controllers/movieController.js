// Functions For Movie Handling Are Created

const movies = require("../data/movies");
const CustomError = require("../utils/customError");

function getHome(req,res){
    res.status(200).json({
        success:true,
        message:"Welcome To BookMyShow Express Backend"
    });
}

function getAllMovies(req,res){
    const {language,genre,city} = req.query;
    let filteredMovies = movies;

    if (language) {
        filteredMovies = filteredMovies.filter(
            (movie)=>movie.language.toLowerCase()===language.toLowerCase());
    }
    if (genre) {
        filteredMovies = filteredMovies.filter(
            (movie)=>movie.genre.toLowerCase()===genre.toLowerCase());
    }
    if (city) {
        filteredMovies = filteredMovies.filter(
            (movie)=>movie.city.toLowerCase()===city.toLowerCase());
    }
    res.status(200).json({
        success:true,
        count: filteredMovies.length,
        data: filteredMovies
    });
}

function getMovieBById(req,res,next){

}