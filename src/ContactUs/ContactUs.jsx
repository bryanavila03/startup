import React from 'react';

export function ContactUs() {
  return (
    <main className="container">
     <p className="mt-5 mb-5">"Current Weather: 89 degrees F"</p>
      <img src = "ant.jpg" alt = "Pest Control Image" className = "main-image"></img>
      <h2 className="mt-5 mb-5">Contact Us</h2>
      <ul> 
        <li><p>Phone: (###) ###-####</p></li>
        <li><p>Email: contact@phoenixpestcontrol.com</p></li>
      </ul>



      <h3 className="mt-5 mb-5">Let's take care of your pest problem.</h3>
      <p>Fill out the form below or call us at (###) ###-#### to schedule an appointment with one of our experts.</p>
      <form method="get" action="play.html">
        <div className="mb-3">
          <label className="form-label">How can we help you?</label>
          <input type="text" className="form-control" placeholder="Brief description of your pest problem" />
        </div>
        <div className="mb-3">
          <label className="form-label">First Name*</label>
          <input type="text" className="form-control" required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name*</label>
          <input type="text" className="form-control" required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address*</label>
          <input type="email" className="form-control" required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number*</label>
          <input type="tel" className="form-control" required/>  
        </div>
        <div className="mb-3">
            <label className="form-label">Zip Code*</label>
            <input type="text" className="form-control" required/>
        </div>

        <div className="form-check ">
        <input className="form-check-input" type="checkbox" id="remember-me" />
        <label className="form-check-label" htmlFor="remember-me">I agree to be contacted by Phoenix Pest Control by phone or text regarding my request. Message and data rates may apply.</label>
        </div> 
        <br />       
        <button type="submit" className="btn btn-success">Request Service</button>
    </form>
    </main>
  );
}