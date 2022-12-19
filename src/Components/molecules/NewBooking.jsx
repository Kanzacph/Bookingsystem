import { useNavigate } from "react-router";
import { useState } from "react";
import { transformToArray } from "./firebase-utils";
import SingleRoom from "./SingleRoom";
import RoomModal from "./RoomModal";

export default function NewBooking() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [availableRooms, setAvailableRooms] = useState([]);

  const getRooms = async () => {
    const response = await fetch(
      `https://eksamen-frontend-default-rtdb.europe-west1.firebasedatabase.app/rooms.json`,
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

  function handleClick(route) {
    navigate(route);
  }

  return (
    <div className="booking">
      <h1>Book lokale</h1>

      <div className="room-buttons-container">
        <li>Lokale 101</li>
        <li>Lokale 102</li>
        <li>Lokale 203</li>
        <li>Lokale 204</li>
        <li>Lokale 208</li>
        <li>Lokale 209</li>

      <RoomModal/>
      </div>

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
        return <SingleRoom room={room} selectedDate={selectedDate} />;
      })}
    </div>
  );
}
