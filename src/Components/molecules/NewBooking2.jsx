import { useNavigate } from 'react-router'
import './CSS/NewBooking2.css'

export default function NewBooking2(props){
    const navigate = useNavigate();

    function handleClick(route){
        navigate(route);
    }
    return(
        <div className='local-buttons-container'>
            <h1>Booking</h1>

                    <li>Lokale 101</li>
                    <li>Lokale 102</li>
                    <li>Lokale 203</li>
                    <li>Lokale 204</li>

            <div className='mere' onClick={() => handleClick('/locals')}  >
                <p>Læs om lokalerne her</p>
            </div>
     
        </div>


            
    )
}