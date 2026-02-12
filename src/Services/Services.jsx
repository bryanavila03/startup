import React from 'react';

export function Services() {
  return (
    <main className="container">
      <p className="mt-5 mb-5">"Current Weather: 89 degrees F"</p> 

      <img src = "ant.jpg" alt = "Pest Control Image" className = "main-image"/>
      <h2 className="mt-5 mb-5">Popular Services</h2>

      <div className = "d-flex flex-wrap gap-4 justify-content-center">
      <div className = "card" style={{width: '15rem'}}>
        <img src="house.jpg" className="card-img-top" alt="Residential Pest Control Image"/>
        <div className = "card-body">
          <h5 className="card-title">Residential Pest Control</h5>
          <p className="card-text">Comprehensive pest control solutions for your home. This service includes regular inspections, treatments, and preventive measures to keep your home pest-free. Our trained professionals use eco-friendly products to ensure the safety of your family and pets.
          </p>
        </div>
      </div>
      <div className = "card" style={{width: '15rem'}}>
        <img src="building.jpg" className="card-img-top" alt="Commercial Pest Control Image"/>
        <div className = "card-body">
          <h5 className="card-title">Commercial Pest Control</h5>
          <p className="card-text">Effective pest management for your business premises. Our commercial pest control services are tailored to meet the specific needs of your business environment, ensuring a safe and pest-free workspace for employees and customers. </p>
        </div>
      </div>  
      <div className = "card" style={{width: '15rem'}}>
        <img src="termite.jpg" className="card-img-top" alt="Termite Treatment Image"/>
        <div className = "card-body">
          <h5 className="card-title">Termite Treatment</h5>
          <p className="card-text">Protect your property from costly termite damage. Our termite treatment services are designed to eliminate existing infestations and prevent future ones, ensuring the structural integrity of your home or business.</p>
        </div>
      </div>
      <div className = "card" style={{width: '15rem'}}>
        <img src="rodent.jpg" className="card-img-top" alt="Rodent Control Image"/>
        <div className = "card-body">
          <h5 className="card-title">Rodent Control</h5>
          <p className="card-text">Safe and effective solutions to keep rodents at bay. Our rodent control services are designed to eliminate existing infestations and prevent future ones, ensuring a pest-free environment for your home or business.</p>
        </div>
      </div>
      <div className = "card" style={{width: '15rem'}}>
        <img src="ant2.jpg" className="card-img-top" alt="Ant Extermination Image"/>
        <div className = "card-body">
          <h5 className="card-title">Ant Extermination</h5>
          <p className="card-text">Get rid of ants quickly and discreetly. Our ant extermination services are designed to eliminate existing infestations and prevent future ones, ensuring a pest-free environment for your home or business.</p>
        </div>
      </div>
        <div className="card" style={{width: '15rem'}}>
          <img src = "ICON.png" className="card-img-top" alt = "Urgent Service Image"/>
          <div className = "card-body">
            <h5 className="card-title">Urgent Service</h5>
            <p className="card-text">Need immediate assistance? We offer urgent pest control services. </p>
            <a href="ContactUs.html" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </div>
      
      

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