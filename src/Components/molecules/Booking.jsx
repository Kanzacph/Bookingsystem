import './CSS/NewBooking.css'

export default function Booking({timeslot, room, date}) {
    return (
        // <div className="newboooking">

        //     <div className='room'>
        //     <h1>{room}</h1>
        //     </div>

        //     <div className='booking-info'>
        //         <p>{date}</p>
        //         <p>{timeslot}</p>
        //     </div>
        // </div>

        <div className="mybookingsBox">
            <div className="newboooking">
                <div className="mybookings-date">
                    <h1>{room}</h1>
                </div>

                <div className="mybookings-info">
                    <p className='date'> Dato: {date}</p>
                    <p className='time'> Tidspunkt: {timeslot}</p>
                </div>

            </div>

        </div>
        
    )
}
