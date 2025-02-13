import PricingSelector from './card.jsx';
import { Link } from 'react-router-dom';
import './container.css';
function Main(){
  return(
    <>
      <main className="container">
        <div className="heading">
          <h2>Ticket Selection</h2>
          <p>Step 1/3</p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>
        <div className="section-title">
          <h3>Techember Fest  &quot;25</h3>
          <p className="event">Join us for an unforgettable experience at Techember Fest! Secure your spot now.</p>
          <p>📍Ikoyi Lagos <br /> March 15,2025 | 7:00PM</p>
        </div>
        <hr />
        <div className="ticket-type">
          <p>Select ticket type</p>
          <PricingSelector />
          
         
        </div>

        <div className="num-ticket">
          <label htmlFor="tickets">Number of tickets</label>
          <select name="tickets" id="tickets">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="checkout-btn">
          <Link className="next btn" to='/form'>Next</Link>
          
          <Link className="cancel btn">Cancel</Link>
        </div>
      </main>
    </>
  );
}
export default Main;