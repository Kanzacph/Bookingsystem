import { useNavigate } from 'react-router'
import { useEffect, useState } from "react";
import { transformToArray } from "./firebase-utils";
// Nyt
import BookingForm from "./BookingForm";
//   Til her
import './CSS/NewBooking3.css'
import SingleRoom from './SingleRoom';


export default function NewBooking3(){
    const navigate = useNavigate();
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

    function handleClick(route){
        navigate(route);
    }

    return(
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
        return <SingleRoom room={room} selectedDate={selectedDate} />
      })}

    </div>
        

        
    );
}