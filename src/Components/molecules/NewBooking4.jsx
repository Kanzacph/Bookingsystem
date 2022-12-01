import { useNavigate } from 'react-router'
import './NewBooking4.css'
import React, { useState } from "react";
import { transformToArray } from "./firebase-utils";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";



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
                  <p className="date">Dato <br /> {selectedDate}</p>
                  <p className="seats">Pladser {room.seats}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

// export default function NewBooking2(props){
//     const navigate = useNavigate();

//     function handleClick(route){
//         navigate(route);
//     }
//     return(
//         <div className='local-buttons-container'>
//             <h1>Lokaleoversigt</h1>
//             <div>
//             <div className='local-buttons'>
//                 <h2>Liste over lokaler</h2>
//                 <li>Lokale 101</li>
//                 <li>Lokale 102</li>
//                 <li>Lokale 203</li>
//                 <li>Lokale 204</li>
//                 <li>Lokale 208</li>
//                 <li>Lokale 209</li>
                
//                 <div className='mere' onClick={() => handleClick('/locals')}  >
//                 <p>Læs om lokalerne her</p>
//                 </div>
//             </div>
//             </div>

//             <form action="">
//                 <label htmlFor="birthday"></label>
//                 <input type="datetime-local" id="birthday" name="birthday" />
//                 <input type="submit" />
//             </form>
//             <duet-date-picker identifier="date"></duet-date-picker>


// {/* 
//             <output>undefined</output>
//         <div>
//             const picker = document.querySelector("duet-date-picker")
//             const output = document.querySelector("output")

//             picker.addEventListener("duetChange", function(event) {
//             output.innerHTML = event.detail.valueAsDate
//             });
//   </div> */}



//             <div className="myboookings-boks1">
//           <div className="mybookings-date">
//               <h1>
//                   <div className="datoen"></div>
//               </h1>
//           </div>
//           <div className="mybookings-info">
//               <p className="lokale"></p>
//               <p className="tidspunkt">08:00 - 12:00</p>
//               <p className="pladser">40 Pladser</p>
//           </div>
         
//       </div>
            

            
//         </div>
//     )
// }