// Kanza
import changeicon from "../atoms/change-ikon.png";
import deleteicon from "../atoms/delete-ikon.png";
import DeleteBooking from "./Delete";
import UpdateBooking from "./Update";

export default function SingleBooking({ date, room }) {
    return (
      <div> <div className="mybookings-boks2">
      <div className="myboookings-boks1">
          <div className="mybookings-date">
              <h1>
                  <div className="datoen">{date}</div>
              </h1>
          </div>
          <div className="mybookings-info">
              <p className="lokale">{room}</p>
              <p className="tidspunkt">08:00 - 12:00</p>
              <p className="pladser">40 Pladser</p>
          </div>
          <div className="mybookings-buttons">

            <div className='changebooking-button'> 
          {/* <img className='changebooking-image' src={changeicon} alt="Changebooking"/>  */}

            <button onClick={DeleteBooking}>change</button>

          </div>

            <div className='deletebooking-button'> 
          {/* <img className='deletebooking-image' src={deleteicon} alt="Deletebooking"/>  */}
          <button onClick={DeleteBooking}>delete</button>

          </div>

          </div>
      </div>


  </div> 

      </div>

      
    );
  }