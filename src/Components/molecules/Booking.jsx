import Delete from "./Delete";
import UpdateModal from "./UpdateModal";

export default function Booking({ timeslot, room, date, id }) {
  return (
    <div className="mybookingsBox">
      <div className="newboooking">
        <div className="mybookings-date">
          <h1>{room}</h1>
        </div>

        <div className="mybookings-info">
          <p className="date"> Dato: {date}</p>
          <p className="time"> Tidspunkt: {timeslot}</p>
        </div>

        <div className="ud-knapper">
          <div className="update-knap">
            <UpdateModal room = {room} timeslot= {timeslot} date= {date} id={id}/>
          </div>

          <div>
            <Delete 
            id={id}/>
          </div>
        </div>
      </div>
    </div>
  );
}
