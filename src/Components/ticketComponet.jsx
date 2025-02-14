import  { useEffect, useRef } from 'react';
import './container.css';
import tickectContainer from '../assets/Subtract.svg';
import bwipjs from 'bwip-js'; 
import { Link, useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
function TicketContainer(){
  const location = useLocation();
  const { username, email, specialRequest, imgURL, quantity,  selectedPlan } = location.state || {};
  const canvasRef = useRef(null); 
  const ticketRef = useRef(null);
  const randomCode = (length)=>{
    const numChar = '0123456789';
    let code = '';
    for (let i = 0; i < length; i+=1) {
      code += numChar.charAt(Math.floor(Math.random() * numChar.length));
    }
    return code;
  };
  useEffect(() => { 
    const codeTxt = randomCode(9);
    try { 

      bwipjs.toCanvas(canvasRef.current, { 
        bcid: 'code128',
        text: codeTxt,
        scale: 3,
        height: 7,
        width: 35,
        textyoffset: 2,
        includetext: true,
        textxalign: 'center',
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  const downloadTicket = () => {
    const ticketElement = ticketRef.current;
    html2canvas(ticketElement, {
      useCORS: true, 
      allowTaint: false,
      logging: true,
    }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'ticket.png';
      link.click();
    });
  };
  return(
    <>
      <main className='container'>
      <div className="details">
          <div className="title">
            <h2>Attendee Details</h2>
            <p>Step 3/3</p>
          </div>
          <div className="progress-bar">
            <div className="checkout-progress"></div>
          </div>
        </div>
        <div className="message">
          <h2>Your ticket is booked!</h2>
          <p>You can download or check your email for a copy</p>
        </div>
        <div className="ticket" ref={ticketRef}>
          <img src={tickectContainer} className='ticket-container' alt="" />
          <div className="ticket-content">
            <h3>Techember Fest  &quot;25</h3>
            <p className='address-time'>
              📍Ikoyi Lagos
            </p>
            <p className="address-time">
              March 15,2025 | 7:00PM
            </p>
            <img src={imgURL} className='user-img' alt="user-img" crossOrigin="anonymous"/>
            <div className="user-info">
              <div className="name cell border-r border-b">
                <label htmlFor="name">Enter your name</label>
                <h3>{username}</h3>
              </div>
              <div className="email cell border-b">
                <label htmlFor="email">Enter your email *</label>
                <h3>{email}</h3>
              </div>
              <div className="ticket-type cell border-r border-b">
                <label htmlFor="ticket-type">Ticket Type:</label>
                <h3>{ selectedPlan}</h3>
              </div>
              <div className="ticket-for cell border-b">
                <label htmlFor="ticket-for">Ticket for:</label>
                <h3>{quantity}</h3>
              </div>
              <div className="request ">
                <label htmlFor="request">Special request?</label>
                <p>{specialRequest}</p>
              </div>
            </div>
            <div className="bar-code">
            <canvas id="mycanvas" ref={canvasRef}></canvas> 
            </div>
          </div>
        </div>
        <div className="checkout-btn">
          <button className="next btn" onClick={downloadTicket}>
            Download Ticket
          </button>
          <Link className="cancel btn" to='/'>
          Book Another ticket
          </Link>
        </div>
      </main>
    </>
  );
}
export default TicketContainer;