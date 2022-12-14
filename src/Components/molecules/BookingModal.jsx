import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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
      `https://eksamen-frontend-default-rtdb.europe-west1.firebasedatabase.app/bookings.json`,
    {
        method: "POST",
        body: JSON.stringify(booking),
    }
    );
    handleClose();
    
};

const handleError = (event) =>{
  event.preventDefault()
  if(time){
    handleShow()
  }else{
    alert("Du skal vælge et tidspunkt!");
  }
}

  return (
    <>
    <div>
    <button  className = "Opret-button" onClick={handleError}>
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
        </Modal.Footer>
      </Modal>
    </>
  );
}

