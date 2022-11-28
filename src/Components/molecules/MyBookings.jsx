import "./MyBookings.css";
import changeicon from "../atoms/change-ikon.png";
import deleteicon from "../atoms/delete-ikon.png";
import CreateBooking from "./Create.jsx";
import UpdateBooking from "./Update.jsx";
import { useState } from "react";
import BookingForm from "./BookingForm.jsx"


export default function MyBookings(props){
    const [bookings, setBookings] = useState([]);

    return(
    <div className="mybookings-container">
        
                


        <div className="mybookings-elements">
       

            <div className="mybookings-text">
        <h1>Dine Bookinger</h1>
        <p>Her kan du finde dine bookinger, redigere og evt. slette bookinger</p>
        </div>

        <div className="inputfelter"><BookingForm/></div>

        <CreateBooking bookings={bookings} setBookings={setBookings} />
        


        </div>



    </div>

    )
}