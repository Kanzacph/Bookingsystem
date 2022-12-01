import "./CSS/MyBookings.css";
import changeicon from "../atoms/change-ikon.png";
import deleteicon from "../atoms/delete-ikon.png";
import CreateBooking from "./Create.jsx";
import UpdateBooking from "./Update.jsx";
import { useState } from "react";
import BookingForm from "./BookingForm.jsx"
import MySingleBooking from "./MySingleBooking";

const url = "https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/booking.json"

export default function MyBookings(){
    const [bookings, setBookings] = useState([{room: 2, date: "2021-01-01", timeslot:"8.30"}]);

    // Skrive en useEffect, som henter alt data fra url
    // transformToArray
    // setBookings(asArray)
    
    return (
        <>
        <div className="mybookings-container">
            <div className="mybookings-elements">
                <div className="mybookings-text">
                    <h1>Dine Bookinger</h1>
                    <p>Her kan du finde dine bookinger, redigere og evt. slette bookinger</p>
                </div>
                {/* <div className="inputfelter">
                    <BookingForm />
                </div> */}
                {/* <CreateBooking bookings={bookings} setBookings={setBookings} /> */}
            </div>

        </div>
        <div>
            {bookings.map((mySingleBooking) => {
                return <MySingleBooking room={mySingleBooking.room} date={mySingleBooking.date} timeslot={mySingleBooking.timeslot} />
            })}
        </div>
        </>
    )
}