import { useNavigate } from 'react-router'
import './CSS/NewBooking3.css'


export default function NewBooking3(){
    const navigate = useNavigate();

    function handleClick(route){
        navigate(route);
    }
    return(
        <div className='makebooking-container'>
            <h1>Book lokale</h1>
            
            <div>
                <div className='mere-link-button' onClick={() => handleClick('/locals')}  >
                    <p>Læs om lokalerne her</p>
                    
                </div>

                <form>
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday"></input>
  <input type="submit"></input>
</form>   

                
            </div>
            
    

        </div>

        

        
    );
}