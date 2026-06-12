export default function BookButton(){
    function handleBooking(){
        alert("Proceeding To Booking Page...")
    }
    return(
        <section>
            <h3>Book Movie</h3>
            <button onClick={handleBooking}>Book Movie</button>
        </section>
    )
}