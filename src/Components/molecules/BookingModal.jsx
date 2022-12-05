import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CSS/BookingModal.css'

export default function BookingModal({time, room, selectedDate}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button  className = "Opret-button" onClick={handleShow}>
        Opret booking
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='Modal-titel'>Bekræft denne booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
          <p className='bekraeft-info'>Tidspunkt: {time}</p>
          <p className='bekraeft-info'>Lokale:{room.id}</p>
          <p className='bekraeft-info'>Dato: {selectedDate.toString()}</p>

         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

