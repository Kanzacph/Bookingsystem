// Kanza's eksempel
import "./MyBookings.css";
import changeicon from "../atoms/change-ikon.png";
import deleteicon from "../atoms/delete-ikon.png";

export default function MyBookings(props){
    return(
    <div className="mybookings-container">

        <div className="mybookings-elements">

            <div className="mybookings-text">
        <h1>Dine Bookinger</h1>
        <p>Her kan du finde dine bookinger, redigere og evt. slette bookinger</p>
        </div>

        <div className="mybookings-bokse">
            <div className="myboookings-boks1">
                <div className="mybookings-date">
                    <h1>
                        <div className="datoen">23</div><br></br>November
                    </h1>
                </div>
                <div className="mybookings-info">
                    <p className="lokale">Undervisningslokale 1</p>
                    <p className="tidspunkt">08:00 - 12:00</p>
                    <p className="pladser">40 Pladser</p>
                </div>
                <div className="mybookings-buttons">

                <div className='changebooking-button'> 
                <img className='changebooking-image' src={changeicon} alt="Changebooking"/> 
                </div>

                <div className='deletebooking-button'> 
                <img className='deletebooking-image' src={deleteicon} alt="Deletebooking"/> 
                </div>

                </div>
            </div>


            {/* Eksempel på boks 2 */}
            <div className="myboookings-boks2">
            <div className="mybookings-date">
                    <h1>
                        <div className="datoen">5</div><br></br>December
                    </h1>
                </div>
                <div className="mybookings-info">
                    <p className="lokale">Undervisningslokale 2</p>
                    <p className="tidspunkt">10:00 - 12:00</p>
                    <p className="pladser">28 Pladser</p>
                </div>
                <div className="mybookings-buttons">

                <div className='changebooking-button'> 
                <img className='changebooking-image' src={changeicon} alt="Changebooking"/> 
                </div>

                <div className='deletebooking-button'> 
                <img className='deletebooking-image' src={deleteicon} alt="Deletebooking"/> 
                </div>

                </div>
            </div>
            
            {/* Eksempel på boks 3 */}
            <div className="myboookings-boks2">
            <div className="mybookings-date">
                    <h1>
                        <div className="datoen">8</div><br></br>December
                    </h1>
                </div>
                <div className="mybookings-info">
                    <p className="lokale">Undervisningslokale 2</p>
                    <p className="tidspunkt">12:00 - 16:00</p>
                    <p className="pladser">35 Pladser</p>
                </div>
                <div className="mybookings-buttons">

                <div className='changebooking-button'> 
                <img className='changebooking-image' src={changeicon} alt="Changebooking"/> 
                </div>

                <div className='deletebooking-button'> 
                <img className='deletebooking-image' src={deleteicon} alt="Deletebooking"/> 
                </div>

                </div>
            </div>
            
        </div>

        </div>



    </div>

    )
}