import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import update from "../atoms/update.png";

export default function UpdateModal({timeslot, room, date, id}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedDate, setSelectedDate] = useState(date);
    const [selectedRoom, setSelectedRoom] = useState(room);
    const [selectedTime, setSelectedTime] = useState(timeslot);


  
    const handleUpdate = async (e) => {
      e.preventDefault();
    
      const response = await fetch(
        `https://eksamen-frontend-default-rtdb.europe-west1.firebasedatabase.app/bookings/${id}.json`,
      {
          method: "PUT",
          body: JSON.stringify({timeslot: selectedTime, room: selectedRoom, date: selectedDate}),
      }

  );
  window.location.reload();

};


const handleDate = (e) => {
  setSelectedDate(e.target.value);
};

const handleRoom = (e) => {
  setSelectedRoom(e.target.value);
};

const handleTime = (e) => {
  setSelectedTime(e.target.value);
};



    return (
      <>

<div className="update-knap" onClick={handleShow}>
      <img src={update} alt="update"/>
    </div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title className='Modal-titel'>Ændre booking</Modal.Title>
          </Modal.Header>
          <Modal.Body>


{/* Time */}
          <p className='bekraeft-info'>Tidspunkt:
            <div className="change-time">
                <select id="timeslots" 
                defaultValue={timeslot} 
                onChange={handleTime}
                className="change-timepicker">
                    <option value="8.30 - 12.00">8.30 - 12.00</option>
                    <option value="12.30 - 16.00">12.30 - 16.00</option>
                </select>
            </div>
          </p>
          
          
 {/*Room  */}
          <p className='bekraeft-info'>Lokale:
            <div className="change-room">
                <select id="rooms" 
                defaultValue={room} 
                onChange={handleRoom}
                className="change-roompicker">
                    <option value="101">101</option>
                    <option value="102">102</option>
                    <option value="203">203</option>
                    <option value="204">204</option>
                    <option value="208">208</option>
                    <option value="209">209</option>
                </select>
            </div>  
          </p>

{/* Date */}
          <p className='bekraeft-info'>Dato:
            <div className="change-calender">
                <form action="">
                    <div>
                        <input
                            className="change-datepicker"
                            type="date"
                            id="calender"
                            name="calender"
                            defaultValue={date}
                            onChange={handleDate}
                        />
                    </div>
                </form>
            </div>
          </p>

{/* Annuler og submitknap */}
            </Modal.Body>
          <Modal.Footer>
            <div className='update-modal-knapper'>
            <Button variant="secondary" onClick={handleClose} className="Luk-modal-update">
                Annuller
            </Button>
            <Button variant="primary" onClick={handleUpdate} className="Bekraeft-modal-update">
                Bekræft
            </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );

}