import "./BookingForm.css";
import { useState } from "react";
import SingleBooking from "./SingleBooking.jsx";
// setBookings
export default function BookingForm(){
    const [booking, setBooking]= useState({
      room: "",
      date: ""
    })  

    const handleChange = (event) => {
      const target = event.target.name;
      const value = event.target.value;
      //  Spread operator
      setBooking({...booking, [target]: value})
      
      //setRoom(input);
    };

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(booking);

      const response = await fetch(
        "https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/bookings.json",
        {
          method: "POST",
          body: JSON.stringify(booking),
        }
      );
      const result = await response.json();
console.log(result);
      setBooking(booking);
    };

    return(
        <form>
        <div className="Lokale-felt">
        <label>Lokale:</label>
        <input
          type="text"
          placeholder="Lokale"
          name="room"
          //value={room}
          onChange={handleChange}
        />
        </div>

        <div className="Dato-felt">
            <label>Dato:</label>
            <input 
            type="text" 
            placeholder="Dato"
            name="date"
            //value={date}
            onChange={handleChange}
        />
        </div>

        <div>
        <button onClick={handleSubmit}>Opret booking</button>
      </div>

        </form>

        



    );
}