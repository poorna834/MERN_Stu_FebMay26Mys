// Callback Based Validation Functions

function validateMovieSelection(movies,movieId,callback){
    const selectedMovie = movies.find((movie)=>movie.id === movieId);

    if (!selectedMovie){
        return callback("Invalid Movie Selection. Choose A Valid Movie ID.",null);
    }
    callback(null,selectedMovie);

}

function validateTimeSelection(movies,selectedTime,callback){
    const selectedShowTime = movie.showtimes.find((show)=>show.time.toLowerCase()===selectedTime.toLowerCase());

    if (!selectedShowTime){
        return callback("Invalid Time Slot Selection. Choose A Valid Show Time.",null);
    }
    callback(null,selectedShowTime);
    
}

function validateSeatCount(seatCount,callback){
    if (!isNaN(seatCount) || seatCount <= 0){
        return callback("Invalid Seat Count . Enter A Valid Seat Count.",null);
    }
    callback(null,seatCount);
}

module.exports = {
    validateMovieSelection,
    validateTimeSelection,
    validateSeatCount
};