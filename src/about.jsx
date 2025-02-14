import NavBar from "./Components/header.jsx";

function AboutPage(){
  return(
    <>
      <NavBar/>
      <div className="container about">
          <p>Event Ticket Booking UI – Open Source Practice Project 🎟️</p>
          <p>
            <b>Overview</b>
            This is a beginner-friendly yet practical Event Ticket Booking UI designed for developers to clone, explore, and build upon. The design focuses on a seamless, login-free ticket reservation flow, allowing users to book event tickets quickly and efficiently.

            The project consists of a three-step ticket booking flow, and developers can extend it further by integrating payment solutions, user authentication (optional), and ticket validation systems.
          </p>
          <h2>Flow & Features</h2>
            <ol className="lists">
              <li>1️⃣ Ticket Selection</li>
              <ul>
                <li>Users can browse available tickets (Free & Paid).</li>
                <li>Ticket options are displayed in a list or card view.</li>
                <li>For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee details.</li>
                <li>For Paid Tickets → Clicking “Purchase Ticket” would ideally open a payment modal.</li>
              </ul>
              <li>2️⃣ Attendee Details Form</li>
              <ul>
                <li>Users input their Name, Email, and optional Phone Number.</li>
                <li>Profile picture upload option with preview functionality.</li>
                <li>Ticket summary is visible to ensure users review their details before submission.</li>
              </ul>
              <li>UI Implementation (React)</li>
              <h3>Component Breakdown:</h3>
              <ul>
                <li>App.jsx → Displays ticket details</li>
                <li>FormPage.jsx → Captures user details</li>
                <li>checkout.jsx → Captures the ticket summary</li>
                <li>File handling: cloudinary</li>
              </ul>
            </ol>
      </div>
    </>
  );
}

export default AboutPage;