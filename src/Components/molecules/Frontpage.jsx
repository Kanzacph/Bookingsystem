import "./Frontpage.css";
import Kalender from "../atoms/Kalender.png";
import Booking from "../atoms/Booking.png";
import { useNavigate } from "react-router";

export default function Frontpage(props) {
  const navigate = useNavigate();

  function handleClick(route) {
    navigate(route);
  }

export default function Frontpage(props){
    return(
        <div className ="frontpage-container">
            <h1>Vælg næste trin</h1>
            <h3>Vil du booke et nyt lokale eller se dine bookinger</h3>
            <div className='frontpage-button-container'>
                <div className='frontpage-button'>
                     <img className='images' src={Kalender} alt="Kalender"/> 
                     <p>
                        Book lokale
                     </p>
                     </div>
                <div className='frontpage-button'> 
                <img className='images1' src={Booking} alt="Booking"/> 
                <p>
                    Mine bookinger
                </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
