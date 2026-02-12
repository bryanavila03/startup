import React from 'react';

export function AboutUs() {
  return (
      <main className="container">
      <p className="mt-5 mb-5">"Current Weather: 89 degrees F"</p> 
      <img src = "ant.jpg" alt = "Pest Control Image" className = "main-image"></img>
      <h2 className="mt-5 mb-5">About Us</h2>
      <ul>
        <li><p>Phoenix Pest Control is a family-owned and operated business that has been serving the Phoenix area for over 10 years. We are committed to providing high-quality pest control services with a focus on safety and environmental responsibility.</p></li>
        <li><p>Our team of licensed professionals is dedicated to delivering effective solutions tailored to your specific needs. We use the latest techniques and products to ensure your home or business remains pest-free.</p></li>
        <li><p>Customer satisfaction is our top priority. We stand behind our work with a satisfaction guarantee and offer competitive pricing for all our services.</p></li>
        
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