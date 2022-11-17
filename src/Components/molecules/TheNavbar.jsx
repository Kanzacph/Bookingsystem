import cphlogo from "../atoms/cphlogo.png";
import './TheNavbar.css';

export default function TheNavbar(props){
    return(
        <div className ="App-header">
            <img src={cphlogo} width="200px" alt="cphlogo"/>
        </div>
    )
}

