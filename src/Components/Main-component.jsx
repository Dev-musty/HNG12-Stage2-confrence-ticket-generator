import { useState } from 'react';
import PricingSelector from './card.jsx';
import { Link, useNavigate } from 'react-router-dom';
import './container.css';
function Main(){
  const [quantity, setQuatity] = useState('1');
  const [selectedPlan, setSelectedPlan] = useState('free');
  const navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();
    
    navigate('/form',{ state: {selectedPlan,quantity} });
  };
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
          <p>📍Ikoyi Lagos || March 15,2025 | 7:00PM</p>
        </div>
        <hr />
        <div className="ticket-type">
          <p>Select ticket type:</p>
          <PricingSelector selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
          
         
        </div>

        <div className="num-ticket">
          <label htmlFor="tickets">Number of tickets</label>
          <select name="tickets" id="tickets" value={quantity} onChange={(e) => setQuatity(e.target.value)} required >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="checkout-btn">
          <button className="next btn" onClick={handleNext}>Next</button>
          
          <Link className="cancel btn">Cancel</Link>
        </div>
      </main>
    </>
  );
}
export default Main;