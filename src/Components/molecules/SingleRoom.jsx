import {useState} from "react"

export default function SingleRoom({room, selectedDate}) {
    console.log(room)
    const [timeslot, setTimeslot] = useState("");
    
    const handleChange = (event) => {
        setTimeslot(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const booking = {
            date: selectedDate,
            timeslot: timeslot,
            room: room.id
        }

        const response = await fetch(
        "https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/booking.json",
        {
            method: "POST",
            body: JSON.stringify(booking),
        }
        );
        const result = await response.json();
        console.log(result);
        
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
                    <p className="date">Dato <br /> {selectedDate}</p>
                    <p className="seats">Pladser {room.seats}</p>
                    <p className="type">Type <br /> {room.type}</p>
                </div>

                <div className="choose-time">
                    <label htmlFor="timeslots">Choose time:</label>

                    <select id="timeslots" value={timeslot} onChange={handleChange}>
                        <option disabled value={""}>
                            -- Choose time --
                        </option>
                        <option value="8.30 - 12.00">8.30 - 12.00</option>
                        <option value="12.30 - 16.00">12.30 - 16.00</option>
                    </select>
                </div>
                <button onClick={handleSubmit} className="Opret-button">Opret booking</button>
            </div>
      </div>
    )
}