import React, { useState } from "react";
import { transformToArray } from "./firebase-utils";
import "./CSS/NewBooking.css";


export default function NewBooking(props) {
  const [selectedDate, setSelectedDate] = useState('');
  const [availableRooms, setAvailableRooms] = useState([]);

  const getRooms = async () => {
    const response = await fetch(
      `https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/rooms.json`,
      {
        method: "GET",
      }
    );
    setAvailableRooms(transformToArray(await response.json()));
  };

  const handleDate = (e) => {
    setSelectedDate(e.target.value);
    getRooms();
  };

  return (
    <div className="booking">
      <h1>Book et lokale</h1>
      <div className="calender">
        <form action="">
          <div>
            <input
              className="datepicker calender-img"
              type="date"
              id="calender"
              name="calender"
              onChange={handleDate}
            />
          </div>
        </form>
      </div>

      {availableRooms.map((room) => {
        return (
          <div className="mybookingsBox">
            <div className="newboooking">
              <div className="mybookings-date">
                <h1>
                  <div className="room">{room.id}</div>
                </h1>
              </div>
              <div className="mybookings-info">
                <p className="date">Dato {selectedDate}</p>
                <p className="seats">Pladser {room.seats}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
