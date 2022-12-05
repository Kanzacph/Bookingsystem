import "./CSS/MyBookings.css";
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
    setBookings(transformToArray(await response.json()));
    console.log(bookings);
  };

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <>
      <div className="mybookings-container">
        <div className="mybookings-elements">
          <div className="mybookings-text">
            <h1>Dine Bookinger</h1>
            <p>
              Her kan du finde dine bookinger, redigere og evt. slette bookinger
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
    </>
  );
}
