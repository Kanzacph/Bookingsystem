import Kalender from "../atoms/Kalender.png";
import Booking from "../atoms/Booking.png";
import { useNavigate } from "react-router";

export default function Frontpage(props) {
  const navigate = useNavigate();


  function handleClick(route) {
    navigate(route);
  }

    return(
        <div className ="frontpage-container">
            <h1>Vælg næste trin</h1>
            <h3>Vil du booke et nyt lokale eller se dine bookinger</h3>
            <div className='frontpage-button-container'>
                <div className='frontpage-button'onClick={() => handleClick('/new-booking')}>
                     <img className='images' src={Kalender} alt="Kalender"/> 
                     <p>
                        Book lokale
                     </p>
                     </div>
                <div className='frontpage-button' onClick={() => handleClick('/my-bookings')}> 
                <img className='images1' src={Booking} alt="Booking"/> 
                <p>
                    Mine bookinger
                </p>
                </div>
            </div>
        </div>
  );
}
