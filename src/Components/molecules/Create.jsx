import { useEffect, useState } from "react";
import { transformToArray } from "./firebase-utils.js";

const url = "https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/bookings.json";

export default function CreateBooking({ setBookings }) {
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
  
}