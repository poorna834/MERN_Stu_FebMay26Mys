// cancel.js
// To cancel the existing booking if exists
const bookingEmitter = require("./events");
const {getCurrentBooking,clearCurrentBooking} = require("./booking");

function cancelBooking(movies){
    const booking = getCurrentBooking();

    if(!booking){
        bookingEmitter.emit("bookingFailed","No Booking Found To Cancel.");
        return null;
    }
    const Movie = movies.find((m)=>m.id === booking.movieId);
    if(!movie){
        bookingEmitter.emit("bookingFailed","Movie Data Not Found While Cancelling Booking.")
        return null;
    }
    const ShowTime = movie.showtimes.find((show)=>show.time.toLowerCase()===booking.time.toLowerCase());
    if(!Showtime){
        bookingEmitter.emit("bookingFailed","Showtime Data Not Found");
        return null;
    }

    //Restore Seats
    showtime.seatsAvailable += booking.seatCount;
    
    // clear Current Booking
    clearCurrentBooking();

    bookingEmitter.emit("bookingCancelled",booking);

    return booking;
}

module.exports = {
    cancelBooking
};