import { useNavigate} from 'react-router'
import React, { useState } from "react";
import { transformToArray } from "./firebase-utils";
import './CSS/NewBooking2.css'

export default function NewBooking2(props){

    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState('');
  const [availableRooms, setAvailableRooms] = useState([]);

    function handleClick(route){
        navigate(route);
    }

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
    return(
        <div className='local-buttons-container'>
            <h1>Book lokale</h1>

                    <li>Lokale 101</li>
                    <li>Lokale 102</li>
                    <li>Lokale 203</li>
                    <li>Lokale 204</li>

            <div className='mere' onClick={() => handleClick('/locals')}  >
                <p>Læs om lokalerne her</p>
            </div>

            <div className="booking">
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
                <p className="date">Dato <br /> {selectedDate}</p>
                <p className="seats">Pladser {room.seats}</p>
              </div>


            </div>
          </div>
        );
      })}
    </div>
     
        </div>


            
    )
}