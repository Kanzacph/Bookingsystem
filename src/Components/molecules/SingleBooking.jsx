// Kanza
import { useState } from "react";
import changeicon from "../atoms/change-ikon.png";
import deleteicon from "../atoms/delete-ikon.png";
import DeleteBooking from "./Delete";
import UpdateBooking from "./Update";
import NewBooking3 from "./NewBooking3";
import { useEffect} from "react";


export default function SingleBooking({ booking }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [availableRooms, setAvailableRooms] = useState([]);
  const [timeslot, setTimeslot] = useState("");


  const deleteBooking = async() => {
    
      const response = await fetch(
      `https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/bookings/${booking.id}.json`,
        {
          method: "DELETE",
          body: JSON.stringify(booking),
        }
        );
  }

  

  // const changeBooking = async() => {



  // }
  
  
  return (
      <div> 
        
        <div className="mybookings-boks2">
      <div className="myboookings-boks1">
          <div className="mybookings-date">
              <h1>
                  <div className="datoen">{booking.date}</div>
              </h1>
          </div>
          <div className="mybookings-info">
              <p className="lokale">{booking.room}</p>
              <p className="tidspunkt">{booking.time}</p>
              <p className="pladser">40 Pladser</p>
          </div>
          <div className="mybookings-buttons">

            <div className='changebooking-button'> 

          <UpdateBooking updateBooking={booking}/>

          </div>

            <div className='deletebooking-button'> 
          <button onClick={deleteBooking} className="delete-button"><img className="deletebooking-image"src={deleteicon}/></button>

          </div>

          </div>
      </div>


  </div> 

      </div>

      
    );
  }