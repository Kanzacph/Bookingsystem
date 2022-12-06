import './CSS/UpdateModal.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import update from "../atoms/update.png";

export default function UpdateModal(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
                <select id="timeslots">
                    <option value="8.30 - 12.00">8.30 - 12.00</option>
                    <option value="12.30 - 16.00">12.30 - 16.00</option>
                </select>
            </div>
          </p>
          
          
 {/*Room  */}
          <p className='bekraeft-info'>Lokale:
            <div className="change-room">
                <select id="rooms">
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
            <div className="calender">
                <form action="">
                    <div>
                        <input
                            className="datepicker calender-img"
                            type="date"
                            id="calender"
                            name="calender"
                            // onChange={handleDate}
                        />
                    </div>
                </form>
            </div>
          </p>

{/* Annuler og submitknap */}
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Annuller
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Bekræft
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );

}