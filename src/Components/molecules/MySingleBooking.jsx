export default function MySingleBooking({timeslot, room, date}) {
    return (
        <div>
            <h1>{room}</h1>
            <p>{date} - {timeslot}</p>
        </div>
    )
}