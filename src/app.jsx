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
  return <div className="app bg-dark text-light">
    <header>
      <h1>Schedule an Appointment Today! (###) ###-####</h1>
      <nav className = "site-navbar">
         <ul>
          <li id="home-link"><a href="Login.html">Phoenix Pest Control</a></li>
          <li><a href="Services.html">Services</a></li>
          <li><a href="AboutUs.html">About Us</a></li>
          <li><a href="ContactUs.html">Contact Us</a></li>
          <li><a href="SignIn.html">Sign In</a></li>      
        </ul>
      </nav>

    </header>

    <main className="container"> PlaceHolder </main>


    <footer>
      <hr />
      <span className="text-reset">Bryan Avila</span>
      <br />
       <a href="https://github.com/bryanavila03/startup.git">GitHub</a>
    </footer></div>;
}
