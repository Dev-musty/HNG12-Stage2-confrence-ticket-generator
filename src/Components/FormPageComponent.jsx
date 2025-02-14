import { useState } from 'react';
import './container.css';
import cloudUpload from '../assets/icon.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';



function FormPageComponent() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [imgURL, setImgURL] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { quantity, selectedPlan } = location.state || {};
  const handleImageChange = async(e) => {
    const file = e.target.files[0];
    if(file){
      setImagePreview( URL.createObjectURL(file) );
    }
    if(!file) return;
    setLoading(true);
    const image = new FormData();
    image.append("file", file);
    image.append("upload_preset", "Personal_pre");
    image.append("cloud_name", "dehf5itej");
    const res = await fetch("https://api.cloudinary.com/v1_1/dehf5itej/image/upload",{
      method: "POST",
      body: image,
    });
    const imgURL = await res.json();
    setImgURL(imgURL.url);
    setLoading(false);
   
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username,
      email,
      specialRequest,
      imgURL,
      quantity,
      selectedPlan,
    };
    navigate('/checkout',{ state: formData });
  };
  
  

  

  return (
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
          <p>{loading ? 'uploading.....' :'Upload Profile Photo'}</p>
          <form>
            <div id="drop-area">
              <input type="file" id="file-input" accept='image/png, image/jpeg, image/svg' onChange={handleImageChange} />
              {imagePreview ? <label htmlFor="file-input" className='img-container'>
                <img src={imagePreview} className='profile-img' alt="user-img" />
                  <div className="overlay">
                    <img src={cloudUpload} alt="Upload Icon" />
                    <span>Drag & drop or click to upload</span>
                  </div>
                </label>:
                <label htmlFor="file-input">
                  <img src={cloudUpload} alt="Upload Icon" className='cloud-img'/>
                  <span>Drag & drop or click to upload</span>
                </label>
              } 
            </div>
          </form>
        </div>
        <hr />
        <form onSubmit={handleFormSubmit} className='user-form'>
          <div >
          <label>Name:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          
          <label>Special Request:</label>
          <input type="text" className='text-area' placeholder='Textarea' value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} />
          
          </div>
          <div className="checkout-btn">
            <button type='submit' className='next btn' >
              Get My Free Ticket
            </button>
            <Link className="cancel btn" to='/form'>Back</Link>
          </div>
        </form>
       
      </main>
      
    </>
  );
}

export default FormPageComponent;
