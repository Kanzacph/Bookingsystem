import './MainContent.css';
import Frontpage from './Frontpage.jsx';

export default function MainContent(props){
    return(
        <div className ="main-content-container">
            <Frontpage />
            {/* <Routes>
                <Route path='/' element={<Frontpage />}></Route>
                <Route path='new-booking' element={<NewBooking />}></Route>
            </Routes> */}
        </div>
    )
}