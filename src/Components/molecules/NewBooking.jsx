import React, { useState } from "react";
import { transformToArray } from "./firebase-utils";
import "./NewBooking.css";
import "./Newbooking_singlebooking";

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
          <div className="mybookings-boks2">
            <div className="myboookings-boks1">
              <div className="mybookings-date">
                <h1>
                  <div className="datoen">{room.id}</div>
                </h1>
              </div>
              <div className="mybookings-info">
                <p className="lokale">{selectedDate}</p>
                <p className="pladser">{room.seats}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
