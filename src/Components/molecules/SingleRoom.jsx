import {useState} from "react"
import BookingModal from "./BookingModal"

export default function SingleRoom({room, selectedDate}) {
    console.log(room)
    const [timeslot, setTimeslot] = useState("");
    
    const handleChange = (event) => {
        setTimeslot(event.target.value);
    };


    return (
        <div className="mybookingsBox">
            <div className="newboooking">

                <div className="mybookings-date">
                    <h1>
                        <div className="room">{room.id}</div>
                    </h1>
                </div>

                <div className="mybookings-info">
                    <p className="date">Dato: {selectedDate}</p>
                    <p className="seats">Pladser: {room.seats}</p>
                    <p className="type">Type: {room.type}</p>
                </div>

                <div className="choose-time">

                    <select id="timeslots" value={timeslot} onChange={handleChange}>
                        <option disabled value={""}>
                            Vælg tidspunkt
                        </option>
                        <option value="8.30 - 12.00">8.30 - 12.00</option>
                        <option value="12.30 - 16.00">12.30 - 16.00</option>
                    </select>
                </div>
        
                <BookingModal time={timeslot} room = {room} selectedDate = {selectedDate}/>
                
            </div>
      </div>
    )
}