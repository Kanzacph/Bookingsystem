import { useState } from "react";
// setBookings
export default function BookingForm(){
    const [booking, setBooking]= useState({
      room: "",
      date: "",
      time: "",
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
//         <form>
//         <div className="Lokale-felt">
//         <label>Lokale:</label><br/>
//         <input
//           type="text"
//           placeholder="Lokale fx: 2.64"
//           name="room"
//           value={room}
//           onChange={handleChange}
//         />
//         </div><br/>

//         <div className="Dato-felt">
//             <label>Dato:</label><br/>
//             <input 
//             type="text" 
//             placeholder="Dato fx: 12. November"
//             name="date"
//             value={date}
//             onChange={handleChange}
//         />
//         </div><br/>
// </form>

    <main>
      <div className="submit-felt">
        {/* Vores bekræft knap */}
        {/* <button onClick={handleSubmit} className="Opret-button">Bekræft</button> */}
        {/* <button onClick={handleSubmit} className="Opret-button">Opret booking</button> */}
      </div><br/>
    </main>
        



    );
}