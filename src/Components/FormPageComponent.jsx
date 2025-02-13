import './container.css';
import cloudUpload from '../assets/icon.svg';
import { Link } from 'react-router-dom';

function FormPageComponent(){
  return(
    <>
      <main className='container'>
        <div className="details">
          <div className="title">
            <h2>Attendee Details</h2>
            <p>Step 2/3</p>
          </div>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>
        <div className="upload-container">
          <p>Upload Profile Photo</p>
          <div id="drop-area">
            <input type="file" id="file-input" multiple/>
            <label htmlFor="file-input">
                <img src={cloudUpload } alt="Upload Icon"/>
                <span>Drag & drop or click to upload</span>
            </label>
          </div>
        </div>
        <hr />
        <form action="/submit" className='user-form'>
          <label htmlFor="username">Enter your name</label>
          <input type="text" className='text-box' required/>
          <label htmlFor="email">Enter your Email</label>
          <input type="text" className='text-box' placeholder='&#9993; hello@techember25.io' required/>
          <label htmlFor="text">Add the project</label>
          <input type="text" className='text-area' placeholder='Textarea'/>
        </form>
        <div className="checkout-btn">
          <Link className="next btn" to='/checkout'>Get My Free Ticket</Link>
          
          <Link className="cancel btn" to='/form'>Back</Link>
        </div>
      </main>
    </>
  );
}
export default FormPageComponent;