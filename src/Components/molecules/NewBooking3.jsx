import { useNavigate } from 'react-router'
import './NewBooking3.css'


export default function NewBooking3(){
    const navigate = useNavigate();

    function handleClick(route){
        navigate(route);
    }
    return(
        <div className='local-buttons-container'>
            <h1>Booking</h1>
            <div>
            <div className='local-buttons'>
                <h2>Liste over lokaler</h2>
                <li>Lokale 101</li>
                <li>Lokale 102</li>
                <li>Lokale 203</li>
                <li>Lokale 204</li>
                
                <div className='mere' onClick={() => handleClick('/locals')}  >
                <p>Læs om lokalerne her</p>
                </div>
            </div>
            </div>

            

            
        </div>
    )
}