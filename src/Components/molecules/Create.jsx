// Kanza
import { useEffect, useState } from "react";
import { transformToArray } from "./firebase-utils.js";
import SingleBooking from "./SingleBooking.jsx";

const url = "https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/.json";

export default function CreateBooking({ bookings, setBookings }) {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
      async function getData() {
        
        const response = await fetch(url);
        if (response.status == 200) {
          
          const body = await response.json();
       
          const asArray = transformToArray(body);
          setBookings(asArray);
        } else {
          setIsError(true);
        }
        setIsLoading(false);
      }
  
      getData();
    }, []);
  
    return (
      <main>
        {isError && <p> Der er sket en uventet fejl, prøv igen senere.</p>}
        {bookings.map((booking) => {
          return <SingleBooking date={booking.date} room={booking.room} />;
        })}
      </main>
    );
  }
  