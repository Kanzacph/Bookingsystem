import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CSS/BookingModal.css'

export default function BookingModal({time, room, selectedDate}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSubmit = async (e) => {

    e.preventDefault();
    const booking = {
        date: selectedDate,
        timeslot: time,
        room: room.id
    }

    const response = await fetch(
    "https://frontend-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/bookings/.json",
    {
        method: "POST",
        body: JSON.stringify(booking),
    }
    );
    const result = await response.json();
    console.log(result);
    handleClose();
    
};

  return (
    <>
    <div>
    <button  className = "Opret-button" onClick={handleShow}>
        Opret booking
      </button>
    </div>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className='Modal-titel'>Bekræft denne booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
          <p className='bekraeft-info'>Tidspunkt: {time}</p>
          <p className='bekraeft-info'>Lokale:{room.id}</p>
          <p className='bekraeft-info'>Dato: {selectedDate.toString()}</p>

         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="Luk-modal">
            Close
          </Button>
          <Button onClick={handleSubmit} className="Bekraeft-modal">
            Bekræft
          </Button>

          {/* <button onClick={handleSubmit} className="Opret-button">Opret booking</button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

