import { useState } from "react";
import Booking from "./Booking";
import { transformToArray } from "./firebase-utils";
import { useEffect } from "react";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {
    const response = await fetch(
      `https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/bookings/.json`,
      {
        method: "GET",
      }
    );
    const data = transformToArray(await response.json());

    const sortedData = data.sort(function (a, b) {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return aDate.getTime() - bDate.getTime();
    });
  
    setBookings(sortedData);
  };

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <div>
      <div className="mybookings-container">
        <div className="mybookings-elements">
          <div className="mybookings-text">
            <h1>Mine Bookinger</h1>
            <p>
              Nedenfor finder du dine eksisterende bookinger. Du kan redigere og
              slette i dine bookinger.
            </p>
          </div>
        </div>
      </div>

      <div className="mybookingsBox">
        <div>
          <div>
            {bookings.map((booking) => {
              return (
                <Booking
                  room={booking.room}
                  date={booking.date}
                  timeslot={booking.timeslot}
                  id={booking.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
