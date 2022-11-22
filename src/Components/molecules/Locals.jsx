import './Locals.css'
import klasselokale from '../atoms/klasselokale.png'


export default function Locals(props){
    return(
        <div>
            <h1>Beksrivelse af lokaler</h1>
            <div>
            <div className='locals-container'>

                <div className='et'>
                    <h2>Lokale 101</h2>
                    <p>
                    Undervisningslokale ligger på 1. sal
                    </p>
                    <p>Udstyr:</p>
                        <li>To whiteboards</li>
                        <li>To projektorer</li>
                        <li>Stikkontakter</li>
                        <li>Forlængerledniger </li>
                        <li>Mørklægningsgardiner </li>
                    <p>Størrelse:</p>
                    <li>74 m2</li> 
                    <p>Max kapacitet:</p>
                    
                    <li>100 personer, 40 siddepladser</li>
                    
                    <img className='klasselokale' src={klasselokale} alt="klasselokale" />
                </div>
                <br />
                <div>
                    <h2>Lokale 102</h2>
                    <p>
                    Undervisningslokale ligger på 1. sal
                    </p>
                    <p>Udstyr:</p>
                        <li>To whiteboards</li>
                        <li>To projektorer</li>
                        <li>Stikkontakter</li>
                        <li>Forlængerledniger </li>
                        <li>Mørklægningsgardiner </li>
                   <p>Størrelse:</p>
                    <li>60 m2</li> 
                    <p>Max kapacitet:</p>
                    <li>70 personer, 20 siddepladser</li>
                   

                    <img className='klasselokale' src={klasselokale} alt="klasselokale" />
                </div>
                <br />
                <div>
                    <h2>Lokale 203</h2> 
                    <p>
                    Undervisningslokale ligger på 2. sal
                    </p>
                    <p>Udstyr:</p>
                        <li>To whiteboards</li>
                        <li>To projektorer</li>
                        <li>Stikkontakter</li>
                        <li>Forlængerledniger </li>
                        <li>Mørklægningsgardiner </li>
                    <p>Størrelse:</p>
                    <li>200 m2</li> 
                    <p>Max kapacitet:</p>
                    <li>190 personer, 120 siddepladser</li>


                    <img className='klasselokale' src={klasselokale} alt="klasselokale" />
                </div>
                <br />
                <div>
                    <h2>Lokale 204</h2>
                    <p>
                    Undervisningslokale ligger på 1. sal
                    </p>
                 <p>Udstyr:</p>
                        <li>To whiteboards</li>
                        <li>To projektorer</li>
                        <li>Stikkontakter</li>
                        <li>Forlængerledniger </li>
                        <li>Mørklægningsgardiner </li>
                    <p>Størrelse:</p>
                    <li>100 m2</li> 
                    <p> Max kapacitet:</p>
                    <li>150 personer, 60 siddepladser</li>


                    <img className='klasselokale' src={klasselokale} alt="klasselokale" />
                </div>
            </div>
            </div>

            
        </div>
    )
}