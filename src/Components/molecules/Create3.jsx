import { useEffect, useState } from "react";
import { transformToArray } from "./firebase-utils";
import SingleBooking3 from "./SingleBooking3";
import "./Create3.css";
const url =
  "https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/.json";


export default function Create3 ({setBookings}){
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
      console.log("You clicked");
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


    //   useEffect(() => {
    //     setIsLoading(true);
    //     // Håndtere async logik/kode
    //     async function getData() {
    //       // Vi laver vores fetch kald, og får et http response fra vores firebase
    //       const response = await fetch(url);
    //       if (response.status === 200) {
    //         // Vi får body ud af det http response
    //         const body = await response.json();
    //         // Vi laver det mærkelige firebase object om til et array.
    //         const asArray = transformToArray(body);
    //         setBookings(asArray);
    //       } else {
    //         setIsError(true);
    //       }
    //       setIsLoading(false);
    //     }
    
    //     getData();
    //   }, []);


};
return(
    <form>
         <div>
        <label>Lokale</label>
        <input
          type="text"
          placeholder="Lokale"
          name="room"
          value={room}
          onChange={handleRoom}
        />
      </div>

      <div>
        <label>Dato</label>
        <input
          type="text"
          placeholder="Dato - f.eks. 15-10-2022"
          name="date"
          value={date}
          onChange={handleDate}
        />
      </div>
      <button onClick={handleSubmit}>Gem booking</button>   
{/* 
      {bookings.map((booking) => {
        return <SingleBooking3 date={booking.date} room={booking.room} />;
      })} */}
    </form>
    
    
)

}