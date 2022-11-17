import './Frontpage.css';

export default function Frontpage(props){
    return(
        <div className ="frontpage-container">
            <h1>Vælg næste trin</h1>
            <h3>Vil du booke et nyt lokale eller se dine bookinger</h3>
            <div className='frontpage-button-container'>
                <div className='frontpage-button'></div>
                <div className='frontpage-button'></div>
            </div>
        </div>
    )
}