import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './Login/Login';
import { Services } from './Services/Services';
import { AboutUs } from './AboutUs/AboutUs';
import { ContactUs } from './ContactUs/ContactUs';
import { SignIn } from './SignIn/SignIn';
import { CustomerPortal } from './CustomerPortal/CustomerPortal';



export default function App() {
  return (
  <BrowserRouter>
  <div className="app bg-dark text-light">
    <header>
      <h1>Schedule an Appointment Today! (###) ###-####</h1>
      <nav className = "site-navbar">
         <ul>
          <li id="home-link"><NavLink href="/">Phoenix Pest Control</NavLink></li>
          <li><NavLink href="/Services">Services</NavLink></li>
          <li><NavLink href="/AboutUs">About Us</NavLink></li>
          <li><NavLink href="/ContactUs">Contact Us</NavLink></li>
          <li><NavLink href="/SignIn">Sign In</NavLink></li>      
        </ul>
      </nav>

    </header>

<Routes>
  <Route path='/' element={<Login />} exact />
  <Route path='/Services' element={<Services />} />
  <Route path='/Scores' element={<Scores />} />
  <Route path='/AboutUs' element={<AboutUs />} />
  <Route path='/ContactUs' element={<ContactUs />} />
  <Route path='/SignIn' element={<SignIn />} />
  <Route path='/CustomerPortal' element={<CustomerPortal />} />
  <Route path='*' element={<NotFound />} />

</Routes>

    <footer>
      <hr />
      <span className="text-reset">Bryan Avila</span>
      <br />
       <a href="https://github.com/bryanavila03/startup.git">GitHub</a>
    </footer>
    </div>;
  </BrowserRouter>
  );
}
function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}