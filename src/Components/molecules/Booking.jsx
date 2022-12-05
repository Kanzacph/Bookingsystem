import './CSS/NewBooking.css'
import update from '../atoms/update.png';
import deleteButton from '../atoms/deleteButton.png'

export default function Booking({timeslot, room, date}) {
    return (
        <div className="mybookingsBox">
            <div className="newboooking">
                <div className="mybookings-date">
                    <h1>{room}</h1>
                </div>

                <div className="mybookings-info">
                    <p className='date'> Dato: {date}</p>
                    <p className='time'> Tidspunkt: {timeslot}</p>
                </div>

                <div className='ud-knapper'>

                    <div className='update-knap'>
                        <img src={update} alt="update" />
                    </div>

                    <div className='delete-knap'>
                        <img src={deleteButton} alt="delete" />
                    </div>

                </div>

            </div>

        </div>
        
    )
}
