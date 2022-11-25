// Kanza
import { useEffect, useState } from "react";
import { transformToArray } from "./firebase-utils.js";
import SingleBooking from "./SingleBooking.jsx";
import BookingForm from "./BookingForm.jsx";
import Modal from "react-modal";


const url = "https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/.json";

export default function UpdateBooking({ updateBooking }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(booking);
  
        const response = await fetch(
          `https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/${updateBooking.id}/.json`,
          {
            method: "PUT",
            body: JSON.stringify(booking),
          }
        );
        const result = await response.json();
  console.log(result);
        setBooking(booking);
      };

      
    const closeModal = () => {
      setModalIsOpen(false);
    };
    const [booking, setBooking]= useState(updateBooking)  
  
      const handleChange = (event) => {
        const target = event.target.name;
        const value = event.target.value;
        //  Spread operator
        setBooking({...booking, [target]: value})
        
        //setRoom(input);
      };
  
  
    return (
      <header className="changeBooking">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Update booking form"
        >
            <form>
        <div className="Lokale-felt">
        <label>Lokale:</label>
        <input
          type="text"
          placeholder="Lokale"
          name="room"
          value={booking.room}
          onChange={handleChange}
        />
        </div>

        <div className="Dato-felt">
            <label>Dato:</label>
            <input 
            type="text" 
            placeholder="Dato"
            name="date"
            value={booking.date}
            onChange={handleChange}
        />
        </div>

        <div>
        <button onClick={handleSubmit}>Gem booking</button>
      </div>

        </form>


          {/* <BookingForm setBookings={setBookings} /> */}
        </Modal>
        <button onClick={openModal}>Update your booking</button>
      </header>
    );
  }