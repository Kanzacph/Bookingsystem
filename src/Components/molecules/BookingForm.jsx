import "./BookingForm.css";
import { useState } from "react";
import SingleBooking from "./SingleBooking.jsx";

export default function BookingForm({setBookings}){
    const [room, setRoom] = useState("");
    const [date, setDate] = useState(""); // date
  
    const handleRoom = (event) => {

      const input = event.target.value;
      setRoom(input);
    };
    const handleDate = (event) => {
      // date
      setDate(event.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      let booking = { room: room, date: date };
      const response = await fetch(
        "https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/.json",
        {
          method: "POST",
          body: JSON.stringify(booking),
        }
      );
      const result = await response.json();
      console.log(result);
      booking.id = result.name;
      setBookings(booking);
    };

    return(
        <form>
        <div className="Lokale-felt">
        <label>Lokale:</label>
        <input
          type="text"
          placeholder="Lokale"
          name="room"
          value={room}
          onChange={handleRoom}
        />
        </div>

        <div className="Dato-felt">
            <label>Dato:</label>
            <input 
            type="text" 
            placeholder="Dato"
            name="date"
            value={date}
            onChange={handleDate}
        />
        </div>

        <div>
        <button onClick={handleSubmit}>Opret booking</button>
      </div>

        </form>

        



    );
}